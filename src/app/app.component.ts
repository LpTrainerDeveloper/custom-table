import { Component, OnInit } from '@angular/core';
import { Column, Element } from './custom-table/custom-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    
    title = 'custom-table-ang';
    pageSize: number = 0;

    tableColumns: Array<Column> = [
        { columnDef: 'id', width:'5%', header: 'id', cell: (element: Record<string, any>) => `${element['id']}` },
        { columnDef: 'nome',width:'15%', header: 'nome', cell: (element: Record<string, any>) => `${element['nome']}`, isLink: true, url: 'abc'},
        { columnDef: 'descricao', width:'20%', header: 'descricao', cell: (element: Record<string, any>) => `${element['descricao']}` },
        { columnDef: 'criadoEm', width:'20%', header: 'criadoEm', cell: (element: Record<string, any>) => `${element['criadoEm']}` },
        { columnDef: 'atualizadoEm', width:'20%', header: 'atualizadoEm', cell: (element: Record<string, any>) => `${element['atualizadoEm']}` },
        { columnDef: 'comentario', width:'20%', header: 'comentario', cell: (element: Record<string, any>) => `${element['comentario']}` },
        ];
    
    tableData: Array<Element> = [];
    response = {
        "content": [
            {
                "id": 1,
                "nome": "Alergia a Corantes Alimentares",
                "descricao": "Reação alérgica a corantes em alimentos.",
                "criadoEm": "2023-12-12T22:47:42.307+00:00",
                "atualizadoEm": "2023-12-12T22:47:42.307+00:00",
                "comentario": "Pode causar reações na pele."
            },
            {
                "id": 2,
                "nome": "Alergia a Crustáceos",
                "descricao": "Reação alérgica a crustáceos.",
                "criadoEm": "2023-12-12T22:47:42.307+00:00",
                "atualizadoEm": "2023-12-12T22:47:42.307+00:00",
                "comentario": "Comum em alergias alimentares."
            },
            {
                "id": 3,
                "nome": "Alergia a Frutas Cítricas",
                "descricao": "Reação alérgica a frutas cítricas.",
                "criadoEm": "2023-12-12T22:47:42.307+00:00",
                "atualizadoEm": "2023-12-12T22:47:42.307+00:00",
                "comentario": "Pode causar desconforto digestivo."
            },
            {
                "id": 4,
                "nome": "Alergia a Frutos do Mar",
                "descricao": "Reação alérgica a frutos do mar.",
                "criadoEm": "2023-12-12T22:47:42.307+00:00",
                "atualizadoEm": "2023-12-12T22:47:42.307+00:00",
                "comentario": "Acomete algumas pessoas."
            },
            {
                "id": 5,
                "nome": "Alergia a Gatos",
                "descricao": "Reação alérgica ao pelo ou saliva de gatos.",
                "criadoEm": "2023-12-12T22:47:42.307+00:00",
                "atualizadoEm": "2023-12-12T22:47:42.307+00:00",
                "comentario": "Comum em pessoas alérgicas."
            },
            {
                "id": 6,
                "nome": "Alergia a Látex",
                "descricao": "Reação alérgica ao látex.",
                "criadoEm": "2023-12-12T22:47:42.307+00:00",
                "atualizadoEm": "2023-12-12T22:47:42.307+00:00",
                "comentario": "Pode ser associada a certos materiais."
            },
            {
                "id": 7,
                "nome": "Alergia a Leite de Vaca",
                "descricao": "Reação alérgica ao leite de vaca.",
                "criadoEm": "2023-12-12T22:47:42.307+00:00",
                "atualizadoEm": "2023-12-12T22:47:42.307+00:00",
                "comentario": "Comum em alergias alimentares."
            },
            {
                "id": 8,
                "nome": "Alergia a Mariscos",
                "descricao": "Reação alérgica a frutos do mar.",
                "criadoEm": "2023-12-12T22:47:42.307+00:00",
                "atualizadoEm": "2023-12-12T22:47:42.307+00:00",
                "comentario": "Comum em alergias alimentares."
            },
            {
                "id": 9,
                "nome": "Alergia a Medicamentos",
                "descricao": "Reação alérgica a determinados medicamentos.",
                "criadoEm": "2023-12-12T22:47:42.307+00:00",
                "atualizadoEm": "2023-12-12T22:47:42.307+00:00",
                "comentario": "Pode variar de pessoa para pessoa."
            },
            {
                "id": 10,
                "nome": "Alergia a Moluscos",
                "descricao": "Reação alérgica a moluscos.",
                "criadoEm": "2023-12-12T22:47:42.307+00:00",
                "atualizadoEm": "2023-12-12T22:47:42.307+00:00",
                "comentario": "Comum em alergias alimentares."
            }
        ],
        "currentPage": 2,
        "totalPages": 3,
        "firstPage": "/alergia?page=0&size=10&sort=nome,asc",
        "totalElements": 30,
        "lastPage": "/alergia?page=2&size=10&sort=nome,asc",
        "nextPage": "/alergia?page=2&size=10&sort=nome,asc",
        "previousPage": "/alergia?page=0&size=10&sort=nome,asc",
        "pageSize": 5
    }

    ngOnInit(): void {
        this.tableData = this.response.content
        this.pageSize = this.response.pageSize
    }



}
