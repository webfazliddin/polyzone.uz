import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#666CFF',
                secondary: '#6D788D',
                accent: '#666CFF',
                info: '#26C6F9',
                success: '#72E128',
                warning: '#FDB528',
                error: '#FF4D49',
            },
            dark: {
                primary: '#666CFF',
                secondary: '#6D788D',
                accent: '#666CFF',
                info: '#26C6F9',
                success: '#72E128',
                warning: '#FDB528',
                error: '#FF4D49',
            }
        },
    },
});
