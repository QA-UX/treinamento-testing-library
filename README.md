# Prática Treinamento Testing Library

Repositório criado para ser utilizado no treinamento da biblioteca de teste de *frontend* Testing Library.

## Testing Library

O desenvolvimento desta biblioteca foi a partir de um problema que a maioria dos desenvolvedores encontram no momento de desenvolver seus testes

- Testes que evitem incluir detalhes da implementação, e focar em fazer os testes seja o mais voltado para o usuário;
- Testes sejam mantidos para que futuras refatorações não quebrem os testes e reduzam a velocidade do desenvolvimento da equipe.

A partir desses dois problemas foi desenvolvido o Testing Library, onde seu enfoque é em:

- Os testes são interrompidos apenas quando o aplicativo é interrompido, não detalhes de implementação;
- Interações com o aplicativo da mesma forma que seus usuários;
- Os seletores internos encontram elementos da maneira que os usuários fazem para encontrar;

### Instalação

A instalação é bem simples, adicionando o pacote nas dependências de desenvolvedor do projeto.

`npm install --save-dev @testing-library/dom`

OBS: interessante a instalação do Jest-dom para executar chamadas na API do DOM do navegador que é executados os testes.

`npm install --save-dev jsdom jsdom-global`

### Queries 

**`getByLabelText`:** Procura pelo texto associado a tag Label, exemplo:

```html 
<label>Username <input /></label>
```
Testing library:

```javascript 
import { render } from '@testing-library/react'
const { getByLabelText } = render(<Login />)
const inputNode = getByLabelText('username')
```

Para este exemplo acima em *html* na qual a tag *input* não possui nenhuma propriedade para encontrar, podemos encontrar o *input* usando **`getByRole`** que realiza a busca pelo nó que se encontra a label Username, exemplo:

```javascript 
const container = document.body
const inputNode = getByLabelText(container, 'Username', {
  selector: 'input',
})
```

**`getByPlaceholderText`:** realiza a busca pelo elemento que possui a propriedade de tag *placeholder*, exemplo:

```html
<input placeholder="Username" />
```
Testing Library:

```javascript 
import { render } from '@testing-library/react'

const { getByPlaceholderText } = render(<MyComponent />)
const inputNode = getByPlaceholderText('Username')
```

**`getByText`:** realiza o *matching* na tag que possui o texto buscado (*textContent*), exemplo:

```html
<a href="/about">About ℹ️</a>
```
Testing Library

```javascript 
import { render } from '@testing-library/react'

const { getByText } = render(<MyComponent />)
const aboutAnchorNode = getByText(/about/i)
```

**`getByAltText`:** retorna a busca do elemento que contém o texto em *alt* (muito usado para `<img>`), exemplo:

```html
<img alt="Incredibles 2 Poster" src="/incredibles-2.png" />
```

Testing Library
```javascript
import { render } from '@testing-library/react'

const { getByAltText } = render(<MyComponent />)
const incrediblesPosterImg = getByAltText(/incredibles.*? poster/i)
```

**`getByTitle`:** retorna o elemento que possui o atributo *title*, exemplo:

```html
<span title="Delete" id="2"></span>
<svg>
  <title>Close</title>
  <g><path /></g>
</svg>
```
`
Testing Library
```javascript
import { render } from '@testing-library/react'

const { getByTitle } = render(<MyComponent />)
const deleteElement = getByTitle('Delete')
const closeElement = getByTitle('Close')
```

**`getByDisplayValue`:** retorna o *input*, *textarea*, *select* que está como valor das tags, exemplo:

```html 
<input type="text" id="lastName" />
document.getElementById('lastName').value = 'Norris'
```

Testing Library
```javascript
import { render } from '@testing-library/react'

const { getByDisplayValue } = render(<MyComponent />)
const lastNameInput = getByDisplayValue('Norris')
```

**`getByRole`:**

**`getByTestId`:** retorna o elemento que possui a propriedade de tag `data-testId`, seu get no elemento do DOM é realizado da seguinte forma `container.querySelector(`[data-testid="${yourId}"]`)`, exemplo:

```html
<div data-testid="custom-element" />
```

Testing Library
```javascript 
import { render } from '@testing-library/react'

const { getByTestId } = render(<MyComponent />)
const element = getByTestId('custom-element')
```

**`TextMatch`:**

## React-testing-library

O *React Testing Library* é uma solução para testar components react, a biblioteca oferece funções que executam acima do react-dom, fazendo com que incentive as melhores práticas de teste, seu funcionamento principal é 

`Quanto mais seus testes se assemelham a maneira como seu software é usado, mais confiança ele pode ofecer`.

Na documentação do [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) se encontra todas as funções para utilizar nos componentes de React, sendo o `render` mais utilizado.

## Jest-dom 

Fornece um conjunto de `jest matches` que podem ser utilizados ao invés de utilizar o `jest` nativo.

No repositório do GitHub [Jest-dom](https://github.com/testing-library/jest-dom/) do projeto se encontra todos as funções criadas que abstraem o `Jest`.

```html
<span data-testid="not-empty"><span data-testid="empty"></span></span>
```

Exemplo de uso do jest-dom
```javascript
expect(getByTestId('empty')).toBeEmpty()
expect(getByTestId('not-empty')).not.toBeEmpty()
```

## Executando o projeto

1. Instalação das dependências
`npm install`

2. Executando projeto React
`npm start`

3. Executando os testes
`npm test`


## Referências

- [Testing Library](https://testing-library.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Jest-dom](https://github.com/testing-library/jest-dom/)