<template>
    <b-container fluid id="hello_world">
        <b-row>
            <b-col>
                <h1>Hello World</h1>
                <h2>Formcomponents:</h2>

                <div class="form-inline">
                    <div class="form-group">
                        <label for="filter" class="sr-only">Filter</label>
                        <input type="text" class="form-control" v-model="filter" placeholder="Filter">
                    </div>
                </div>
                <datatable :columns="columns" :data="formcomponents" :filter-by="filter"></datatable>
                <datatable-pager v-model="page" type="abbreviated" :per-page="per_page"></datatable-pager>

                <ul id="formcomponent-list">
                    <li v-for="fc,cnt in this.formcomponents" v-bind:key="cnt">
                        {{ fc.fcname }} - {{ fc.slug }} ( {{ fc.guid }} ) 
                     </li>
                </ul>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

//import EventBus from '@/main.js';

//import { formbuilder } from '../store/modules/formbuilder/index.js';

export default {
    name: 'HelloWorld',
    computed: {
        formcomponents() {
            return this.$store.getters.formcomponents;
        },
    },
    data() {
        return {
            isPreview: false,
            filter: '',
            page: 1,
            per_page: 10,
            columns: [
                { label: 'ID', field: 'id', align: 'center', filterable: false },
                { label: 'Name', field: 'fcname' },
                { label: 'Slug', field: 'slug' },
                { label: 'GUID', field: 'guid' },
                { label: 'Created', field: 'created_at' },
            ],
            //rows: this.formcomponents,
            /*
            columns: [
                { label: 'ID', field: 'id', align: 'center', filterable: false },
                { label: 'Username', field: 'user.username' },
                { label: 'First Name', field: 'user.first_name' },
                { label: 'Last Name', field: 'user.last_name' },
                { label: 'Email', field: 'user.email', align: 'right', sortable: false }
            ],
            rows: [
            {
                "id": 1,
                "user": {
                    "username": "dprice0",
                    "first_name": "Daniel",
                    "last_name": "Price",
                    "email": "dprice0@blogs.com"
                },
                "address": "3 Toban Park",
                "city": "Pocatello",
                "state": "Idaho"
            }
            ]
            */
        }
    },
    methods: {
        foo() {
            return 'bar';
        },
    },
    created() {
        this.$store.dispatch('getFormcomponents',10);
    }
}
</script>

<style scoped lang="scss">
</style>

