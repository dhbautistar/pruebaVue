let url = 'http://127.0.0.1:8000/api/productos/';
let filter = 'http://127.0.0.1:8000/api/filter/';
let bodegas = 'http://127.0.0.1:8000/api/bodegas/';
let conteo = 'http://127.0.0.1:8000/api/conteo';
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
    return {
      errors: [],
      productos: [],
      dialog: false,
      operacion: '',
      filtro: 'todo',
      buscador: '',
      stop: '',
      bodegas: [],
      bodega: null,
      conteo: [],
      producto: {
        id: null,
        nombre: '',
        codigo: '',
        existencia: '',
        id_bodega: '',
        descripcion: '',
        estado: ''
      }
    }
  },
  created() {
    this.mostrar();
    this.setBodegas();
    this.setConteo();
  },
  methods: {
    //MÉTODOS PARA EL CRUD
    mostrar: function () {
      axios.get(url)
        .then(response => {
          this.productos = response.data;
        })
    },

    //obtener bodegas
    setBodegas: function () {
      axios.get(bodegas)
        .then(response => {
          this.bodegas = response.data;
        })
    },

    //obtener conteo
    setConteo: function () {
      axios.get(conteo)
        .then(response => {
          this.conteo = response.data;
        })
    },

    //filtro
    filtrar: function () {
      if (this.buscador) {
        axios.get(filter + this.buscador)
          .then(response => {
            this.productos = response.data;
          })
      } else {
        this.mostrar();
      }
    },

    crear: function () {
      this.errors = [];
      let parametros = { nombre: this.producto.nombre, codigo: this.producto.codigo, existencia: this.producto.existencia, id_bodega: this.bodega, descripcion: this.producto.descripcion, estado: this.producto.estado };
      if (!this.producto.nombre) {
        this.errors.push("Nombre requerido.");
        this.stop = true;
      }
      else if (!this.producto.codigo) {
        this.errors.push("Codigo requerido.");
        this.stop = true;
      }
      else if (!this.producto.existencia) {
        this.errors.push("Existencia requerido.");
        this.stop = true;
      }
      else if (!this.bodega) {
        this.errors.push("Bodega requerido.");
        this.stop = true;
      }
      else if (!this.producto.descripcion) {
        this.errors.push("Descripción requerido.");
        this.stop = true;
      }
      else if (!this.producto.estado) {
        this.errors.push("Estado requerido.");
        this.stop = true;
      } else {
        this.stop = false;
        axios.post(url, parametros)
          .then(response => {
            this.mostrar();
            this.setConteo();
          });
        this.producto.nombre = "";
        this.producto.codigo = "";
        this.producto.existencia = "";
        this.bodega = "";
        this.producto.descripcion = "";
        this.producto.estado = "";
      }
    },
    editar: function () {
      let parametros = { nombre: this.producto.nombre, codigo: this.producto.codigo, existencia: this.producto.existencia, id_bodega: this.bodega, descripcion: this.producto.descripcion, estado: this.producto.estado, id: this.producto.id };
      if (!this.producto.nombre) {
        this.errors.push("Nombre requerido.");
        this.stop = true;
      }
      else if (!this.producto.codigo) {
        this.errors.push("Codigo requerido.");
        this.stop = true;
      }
      else if (!this.producto.existencia) {
        this.errors.push("Existencia requerido.");
        this.stop = true;
      }
      else if (!this.bodega) {
        this.errors.push("Bodega requerido.");
        this.stop = true;
      }
      else if (!this.producto.descripcion) {
        this.errors.push("Descripción requerido.");
        this.stop = true;
      }
      else if (!this.producto.estado) {
        this.errors.push("Estado requerido.");
        this.stop = true;
      } else {
        this.stop = false;
        axios.put(url + this.producto.id, parametros)
          .then(response => {
            this.mostrar();
            this.setConteo();
          })
          .catch(error => {
            console.log(error);
          });
      }
    },

    //Botones y formularios
    guardar: function () {
      if (this.operacion == 'crear') {
        this.crear();
      }
      if (this.operacion == 'editar') {
        this.editar();
      }
      if (!this.stop) {
        this.dialog = false;
      }
    },
    formNuevo: function () {
      this.dialog = true;
      this.operacion = 'crear';
      this.producto.nombre = '';
      this.producto.codigo = '';
      this.producto.existencia = '';
      this.producto.id_bodega = '';
      this.producto.descripcion = '';
      this.producto.estado = '';
    },
    formEditar: function (id, nombre, codigo, existencia, id_bodega, descripcion, estado) {
      this.bodega = id_bodega;
      this.producto.id = id;
      this.producto.nombre = nombre;
      this.producto.codigo = codigo;
      this.producto.existencia = existencia;
      this.producto.id_bodega = id_bodega;
      this.producto.descripcion = descripcion;
      this.producto.estado = estado;
      this.dialog = true;
      this.operacion = 'editar';
    }
  },
  computed: {
    filter: function () {
      var data = this.productos;
      var filtroCheck = this.filtro;
      if (filtroCheck == 'todo') {
        return data;
      } else {
        return data.filter(function (x) {
          return x.estado == filtroCheck;
        });
      }
    }
  }

});
