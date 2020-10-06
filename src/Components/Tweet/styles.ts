import styled, { css } from 'styled-components';
import { Chat, Rocketseat, Favorite } from '../../Styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);

  max-width: 100%;
`;


export const Retweeted = styled.div`

`;

export const RocketseatIcon = styled(Rocketseat)`
    width:16px;
    height: 16px;

    margin-left: 35px;
    margin-right: 9px;

    >path{ 
        fill: var(--gray);
    }
`;

export const Body = styled.div`
    display: flex;
    margin-top: 3px;

    position:relative;
`;

export const Avatar = styled.div`
    width: 49px;
    height: 49px;
    border-radius: 50%;
    flex-shrink: 0;
    background: var(--gray);

    position: absolute;
    top: 0;
    left: 0;
`;

export const Content = styled.div`
    display: flex;
    flex-direction:column;

    width: 100%;
    margin-top: 2px;
    padding-left: 59px;
`;


export const Header = styled.div`
    display: flex;
    align-items: center; 

    font-size: 15px;

    /* Faz com que o texto não quebre a linha */
    white-space: nowrap;

    >strong{
        margin-right: 5px;
    }

    >span, time {
        color: var(--gray);
    }

    >strong,
    span{
        white-space: nowrap;
        
        /* Ao encolher muito a tela os textos strong e span 
            serao abreviados com tres pontinhos
        */
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;

export const Dot = styled.div`
    background: var(--gray);
    width: 2px;
    height: 2px;
    margin: 0 10px;
`;


export const Description = styled.p`
    font-size: 14px;
    margin-top: 4px;
`;


export const ImageContent = styled.div`
    margin-top: 12px;
    width: 100%;
    height: min(285px, max(175px, 41vw));

    background: var(--outline);
    border-radius:14px;

    cursor: pointer;

    /* Efeito para quando o mouse passar por cima da imagem */
    &:hover{
        opacity: 0.7;
    }
`;


export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* Para os itens irem se ajustando conforme for diminuindo a tela */
    flex-wrap: wrap;
    margin: 11px auto 0;
    width: 100%; /** MOBILE */

    @media (min-width: 330px){
        width: 63%;
    }

    >div{
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }
`;


export const Status = styled.div`
    display: flex;
    align-items:center;

    font-size: 14px;

    >svg{
        margin-right: 5px;
    }

    /* Para o nosso primeiro icon
       Vamos selecionar o pai dele &
       e ele mesom svg path
    */
    &:nth-child(1){
        &, > svg path{
            color: var(--gray);
        }
    }

    &:nth-child(3){
        color: var(--retweet);

        > svg path{
            fill: var(--retweet);
        }
    }

    &:nth-child(2){
        color: var(--like);

        > svg{
            fill: var(--like);
        }
    }
`;


const iconCSS = css`
    width: 19px;
    height: 19px;
`;

export const ComentIcon = styled(Chat)`
    ${iconCSS};    
`;

export const LikeIcon = styled(Rocketseat)`
    ${iconCSS};
`;


export const RetweetIcon = styled(Favorite)`
    ${iconCSS};
`;
