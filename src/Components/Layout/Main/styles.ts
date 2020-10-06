import styled,{css} from 'styled-components';
import { ArrowLeft, Home, Search, Notifications, Email } from '../../../Styles/Icons';

  export const Container = styled.div`
    /* Display flex para deixar no modo flexivel
        flex-direction para organizar os elementos horizontalmente.
    */
    display: flex;
    flex-direction: column;
    
    /*
     min é uma comparação do primeiro valor com o segundo valor
     quem ganhar fica como valor final.

     Nesse caso se a tela for expandida ele pode ter uma largura de
     até 601px, se for menor que isso, tera q quantidade expandida(100%).
    */
    width: min(601px, 100%);

    /* (Responsividade)
     Apartir de 500px ele cria bordas na direita e esquerda.
    */
    @media (min-width: 500px){
        border-left: 1px solid var(--outline);
        border-right: 1px solid var(--outline);
    };
  `; 

  export const Header = styled.div`
    /* sticky ficar peso na parte de cima da tela 
        z-index para especificar que ira fica acima 
        dos outros elementos
    */
    z-index: 2;
    position: sticky;

    top:0;
    background: var(--primary);

    display: flex;
    align-items: center;

    text-align: left;

    padding: 8px 0 9px 13px;
    border-bottom: 1px solid var(--outline);

    > button{
        padding: 8px;
        border-radius: 50%;

        outline: 0;
        cursor: pointer;

        &:hover{
            background: var(--twitter-dark-hover);
        }
    }
  `; 

  export const BackIcon = styled(ArrowLeft)`
    width: 24px;
    height: 24px;

    /* Cor */
    fill: var(--twitter);
  `; 

  export const ProfileInfo = styled.div`
    margin-left: 17px;

    display:flex;
    flex-direction: column;

    >strong{
        font-size: 15px;
        color: var(--gray);
    }
  `;

  
export const BottomMenu = styled.div`
/* 
    Deixando o elemento fixo
    Sobrepondo o mesmo
    Deixando na parte inferior da pagina
    Começando da esquerda
*/
    position:fixed;
    z-index:2;
    bottom:0;
    left:0;

    background:var(--primary);
    width:100%;
    border-top: 1px solid var(--outline);

    display: flex;
    justify-content:space-between;

    padding: 8px min(46px, max(10vw, 10px));

    /* Apartir de 500px, não quero que ela apareça */
    @media (min-width: 500px){
      display: none;
    }
`;

// Criando uma instancia do css para todos icons
const iconCSS = css`
  width: 31px;
  height:31px;

  cursor: pointer;

  fill: var(--gray);

  /* Quando clicar(ativala) dos incons:  */
  &:hover,
  &.active{
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`
${iconCSS}
`;
export const SearchIcon = styled(Search)`
${iconCSS}
`;
export const BellIcon = styled(Notifications)`
${iconCSS}
`;
export const EmailIcon = styled(Email)`
${iconCSS}
`;

