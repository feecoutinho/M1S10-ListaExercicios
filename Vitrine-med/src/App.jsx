import { useContext, useState } from 'react'
import './App.css'

import { MedicamentosContext } from './context/MedicamentosContext'

import Header from "./components/Header"
import FormularioNovoMed from "./components/FormularioNovoMed"
import CardMed from './components/CardMed'

function App() {

  const {listaMedicamentos} = useContext(MedicamentosContext)

  return (
    <>
      <Header />      
      <FormularioNovoMed />
      {listaMedicamentos.map(medicamento => (
        <CardMed key={medicamento.id} medicamento={medicamento} />
      ))}
    </>
  )
}

export default App
