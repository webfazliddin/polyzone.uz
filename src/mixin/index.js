import moment from 'moment';

var numeral = require('numeral');

export default {
  methods: {
    moment: moment,
    numeral: numeral,
    buildFormData: function (formData, data, parentKey) {
      if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
        Object.keys(data).forEach(key => {
          this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
        });
      } else if(data instanceof File){
        formData.append(parentKey, data, data.name);
      } else {
        let value = data == null ? '' : data;
        formData.append(parentKey, value);
      }
    },
  }
}
