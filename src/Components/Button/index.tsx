import styled from 'styled-components';

// outlined para saber em qual estilo o bot]ao ira ficar
interface Props{
    outlined?: boolean;
}

export default styled.button<Props>`
/* Caso outlined for true, a background sera transparente, caso contrario azul
    Caso o outlined for true, a cor sera azul, caso contrario branco.
    Caso o outlined for true o botao tera uma borda, caso contrario nao
 */
background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};

padding: 16px;
border-radius: 25px;

font-weight: bold;
font-size: 15px;

cursor: pointer;
outline: 0;

&:hover{
    background: ${props => props.outlined ? 'var(--twitter-dark-hover)' : 'var(twitter-light-hover)'};
}
`;