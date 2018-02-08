// getOntologyAncestors: function (curie) {
//   const _this = this;
//   const deconstructedCurie = curie.split(':');
//   const ontCode = deconstructedCurie[0].toLowerCase();
//   const oboCurie = deconstructedCurie.join("_");
//   const url = 'https://www.ebi.ac.uk';
//   const endpoint = `/ols/api/ontologies/${ontCode}/terms/`;
//   const iri = encodeURIComponent(
//     encodeURIComponent(
//       `http://purl.obolibrary.org/obo/${oboCurie}`
//     )
//   );
//   axios.get(url + endpoint + iri + '/hierarchicalAncestors')
//     .then((resp) => {
//       // eslint-disable-next-line
//       const terms = resp.data._embedded.terms;
//       terms.forEach(function (data) {
//         const monCurie = data.short_form.replace('_', ':');
//         if (monCurie in _this.topClassTerms) {
//
//         }
//       });
//     })
//     .catch((err) => {
//       // eslint-disable-next-line
//       console.log(err);
//     });
// },

// mapPrefixes(curie, label) {
//   const deconstructedCurie = curie.split(':');
//   const prefix = deconstructedCurie[0];
//   const identifier = deconstructedCurie[1];
//   const uri = this.curieMap[prefix];
//   const href_link = `${uri}${identifier}`;
//   return `<a href='${href_link}'>${label}</a>`
// },
// fetchCuries() {
//   const _this = this;
//   axios.get('/static/yaml/curie_map.yaml').then((resp) => {
//     _this.curieMap = yaml.load(resp.data);
//   });
// },
