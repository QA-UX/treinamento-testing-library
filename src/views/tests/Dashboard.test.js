import React from 'react';
import { render, wait, within } from '@testing-library/react';
import '@testing-library/jest-dom'
import Dashboard from '../Dashboard';

describe('<Dashboard /> ', () => {
  test('renderizar corretamente ', () => {

    window.HTMLCanvasElement.prototype.getContext = () => {}
    const wrapper = render(
      <Dashboard />
    )
    expect(wrapper.getByText('Cursos')).toBeInTheDocument();
    expect(wrapper.getByText('Valor Médio')).toBeInTheDocument();
    //validar o restante dos itens com os valores
  });

  test('renderiza corretamente os links Footer', () =>{
    //fazer os testes para verificar os links 
  });

});

describe('NavBar', () =>{
  test('Renderizar corretamente NavBar', () =>{
    // verificar se existe as opções no navbar e se contém o link,
    //  validando a mudança de página
  });
})