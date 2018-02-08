<template>
  <div id="TableView">
    <div v-cloak>
      <vue-good-table
        id="table-style"
        :columns="columns"
        :rows="rows"
        :paginate="true"
        :lineNumbers="true"
        styleClass="table condensed table-bordered"/>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
  import axios from 'axios';
  import yaml from 'yaml-js';

  export default {
    name: 'TableView',
    props: [ 'identifier', 'annotationType' ],
    data() {
      return {
        curieMap: '',
        rows: [],
        columns: [
          {
            label: this.firstCap(this.annotationType),
            field: 'annoType',
            html: true,
          },
          {
            label: 'Evidence Type',
            field: 'evidenceType',
          },
          {
            label: 'Reference',
            field: 'reference',
            html: true,
          },
          {
            label: 'Source',
            field: 'source',
            html: true,
          },
        ],
      };
    },
    created() {
      this.fetchData();
      this.fetchCuries();
    },
    methods: {
      fetchData() {
        const _this = this;
        const entity_curie = this.identifier;
        const annotationType = this.annotationType;
        const baseURL = `https://api.monarchinitiative.org/api/bioentity/gene/${entity_curie}/${annotationType}/`;
        const params = {
          fetch_objects: true,
          rows: 1000,
        };
        axios.get(baseURL, {
          params: params,
        }).then((resp) => {
          _this.dataPacket = resp;
          resp.data.associations.forEach(function (element) {
            const refs = [];
            const sources = [];
            const objectCurie = element.object.id;
            element.publications.forEach(function (data) {
              refs.push(`<a href='http://www.ncbi.nlm.nih.gov/pubmed/${data.id}'>${data.id}</a>`);
            });
            const annoType = _this.mapPrefixes(element.object.id, element.object.label);
            _this.rows.push({
              annoType: annoType,
              evidenceType: 'TODO',
              reference: refs.join('\n'),
              source: 'TODO',
            })
          })
        })
          .catch((err) => {
            console.log(err);
          });
      },
      mapPrefixes(curie, label) {
        const deconstructedCurie = curie.split(':');
        const prefix = deconstructedCurie[0];
        const identifier = deconstructedCurie[1];
        const uri = this.curieMap[prefix];
        const href_link = `${uri}${identifier}`;
        return `<a href='${href_link}'>${label}</a>`
      },
      fetchCuries() {
        const _this = this;
        axios.get('/static/yaml/curie_map.yaml').then((resp) => {
          _this.curieMap = yaml.load(resp.data);
        });
      },
      firstCap(string)
      {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
    },
  };
</script>
<style scoped>

</style>
