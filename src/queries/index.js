import { gql } from "@apollo/client";

export const addUser = gql `
  mutation MyMutation($objects: [mini_project_users_insert_input!]!) {
    insert_mini_project_users(objects: $objects) {
      returning {
        email
        id
        nama
        password
        profile_pic
        role
      }
    }
  }
`

export const getUser = gql `
  query MyQuery($where: mini_project_users_bool_exp = {}) {
    mini_project_users(where: $where) {
      id
      role
      email
      password
      nama
      profile_pic
    }
  }
`

export const addMuseum = gql `
  mutation MyMutation($objects: [mini_project_museum_insert_input!]!) {
    insert_mini_project_museum(objects: $objects) {
      returning {
        id
        nama
        deksripsi
        alamat
        jadwal
        kontak
        gambar
      }
    }
  }
`

export const getMuseum = gql `
  query MyQuery($where: mini_project_museum_bool_exp = {}) {
    mini_project_museum(where: $where) {
      id
      nama
      deksripsi
      alamat
      jadwal
      kontak
      gambar
    }
  }
`

export const getMuseumAndUlasan = gql `
  query MyQuery($museum: mini_project_museum_bool_exp!, $ulasan: mini_project_ulasan_bool_exp!) {
    mini_project_museum(where: $museum) {
      id
      nama
      deksripsi
      alamat
      gambar
      jadwal
      kontak
    }
    mini_project_ulasan(where: $ulasan) {
      ulasan
      img
      date
    }
  }
`

export const addUlasan = gql `
  mutation MyMutation($objects: [mini_project_ulasan_insert_input!]!) {
    insert_mini_project_ulasan(objects: $objects) {
      returning {
        id
        date
        id_museum
        id_user
        img
        ulasan
      }
    }
  }
`

/**
  
  add User (input dari form)
  {
    "objects": {
      "email" : "bijak@gmail.com", 
      "nama": "Bijak Algifan Putra", 
      "password" : "qwerty123" 
      }
  }

  get user (input dari form)
  {
  "where": {
    "email": {"_eq": "admin@admin.com"},
    "password": {"_eq": "admin123"}
    }
  }

  add Museum (input dari form)
  {
    "objects": {
      "nama": "Museum Konferensi Asia Afrika",
      "alamat": "Jl. Asia Afrika No.65, Braga,  Kota Bandung, Jawa Barat",
      "jadwal": "Tuesday, Thursday, Saturday, Sunday 09.00 - 16.00",
      "kontak": "(022)4233564",
      "deksripsi": "Museum ini bernama Museum Konferensi Asia Afrika. Nama tersebut digunakan untuk mengenang peristiwa Konferensi Asia Afrika yang menjadi Sumber inspirasi dan motivasi bagi bangsa Asia-Afrika. Museum ini dibangun oleh Pemerintah Republik Indonesia dan berada di bawah wewenang Departemen Pendidikan dan Kebudayaan. Sementara pengelolaannya di bawah koordinasi Departemen Luar Negeri dan Pemerintah Daerah Tingkat I Provinsi Jawa Barat.",
      "gambar" : base64
    }
  }

  {
    "where": {
      "id": {"_eq": 1}
    }
  }

  add ulasan (id_museum get dari page yang dibuka id_user dari user yang sedang login)
  {
    "objects": [{
      "id_museum": 1,
      "id_user": 2,
      "ulasan": "Tempatnya bagus",
      "img" : ""
    }]
  }

  get museum sama ulasannya (id params dari url yang dibuka)
  {
    "museum": {
      "id": {"_eq": 1}
    },
    "ulasan": {
      "id_museum": {"_eq": 1} 
    }
  }


 */