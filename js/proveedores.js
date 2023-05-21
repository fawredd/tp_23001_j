const tarjeta = {
    props: ['prov'],
    template: `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img v-bind:src="logo" v-bind:alt="proveedor">
                </div>
                <div class="flip-card-back">
                    <h3>{{proveedor}}</h3>
                    <p>Medicina prepaga</p>
                    <p>Web: <a v-bind:href="webProveedor">LINK</a></p>
                </div>
            </div>
        </div>`,
    data() {
        return {
            logo: this.prov['logo'],
            proveedor: this.prov['proveedor'],
            webProveedor: this.prov['webProveedor']
        }
    }
}
const listado = {
    prov1: {
        logo: 'img/Osde.png',
        proveedor: 'Osde',
        webProveedor: 'http://www.osde.com.ar'
    },
    prov2: {
        logo: 'img/Medicus.png',
        proveedor: 'Medicus',
        webProveedor: 'http://www.medicus.com.ar'
    },
    prov3: {
        logo: 'img/CEMIC.png',
        proveedor: 'Cemic',
        webProveedor: 'http://www.cemic.com.ar'
    },
    prov4: {
        logo: 'img/Galeno.png',
        proveedor: 'Galeno',
        webProveedor: 'http://www.e-galeno.com.ar'
    },
    prov5: {
        logo: 'img/Swiss-Medical.jpg',
        proveedor: 'Swiss Medical',
        webProveedor: 'http://www.swissmedical.com.ar'
    },
    prov6: {
        logo: 'img/OMINT.jpg',
        proveedor: 'Omint',
        webProveedor: 'http://www.omint.com.ar'
    },
    prov7: {
        logo: 'img/Sancor-salud.png',
        proveedor: 'Sancor Salud',
        webProveedor: 'http://www.sancorsalud.com.ar'
    },
    prov8: {
        logo: 'img/Medife.jpg',
        proveedor: 'Medife',
        webProveedor: 'http://www.medife.com.ar'
    },
    prov9: {
        logo: 'img/Cober.jpg',
        proveedor: 'Cobermed',
        webProveedor: 'http://www.cobermed.com'
    },
    prov10: {
        logo: 'img/Aca-Salud.png',
        proveedor: 'Aca Salud',
        webProveedor: 'http://www.acasalud.com.ar'
    }
}

const { createApp } = Vue
createApp({
    components: {
        'proveedor': tarjeta
    },
    data() {
        return {
            listado
        }
        }
}).mount('#listado-proveedores');
