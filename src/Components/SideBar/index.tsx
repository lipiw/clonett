import React from 'react';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import StickyBox from 'react-sticky-box';

import {
Container,
SearchWrapper,
SearchInput,
SearchIcon,
Body
}from './styles';

// import { Container } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter"/>
            <SearchIcon/>
        </SearchWrapper>

    <StickyBox>
        <Body>
            <List
                title="Talvez você curta"
                elements={[<FollowSuggestion
                name="Luiz Batnero"
                nickname="@luizbatanero"
                />,

                <FollowSuggestion
                name="Luke Morales"
                nickname="@lukemorales"
                />,

                <FollowSuggestion
                name="Camila Magalhães"
                nickname="@camilaamgl"
                />]}
            />
             <List
                title="Talvez você curta"
                elements={[<News/>,
                    <News/>,
                    <News/>]}
            />
            <List
                title="Talvez você conheça"
                elements={[<News/>,
                    <News/>,
                    <News/>]}
            />
            <List
                title="Talvez você curta"
                elements={[<News/>,
                    <News/>,
                    <News/>]}
            />
        </Body>
        </StickyBox>
    </Container>

  );
}

export default SideBar;