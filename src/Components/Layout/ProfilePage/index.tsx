import React from 'react';
import Feed from '../../Feed';

import { Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar/>
        </Banner>
            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>
                <h1>Felipe Rafael</h1>
                <h2>@felipeterson</h2>

                <p>
                    Aqui esta minha descrição.
                </p>

                <ul>
                    <li>
                        <LocationIcon/>
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon/>
                        Nascido(a) em 29 de março de 2000
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>100</strong>
                    </span>
                    <span>
                     <strong>500 </strong> seguindores
                    </span>
                </Followage>
            </ProfileData>
            <Feed/>
        
    </Container>

  );
}

export default ProfilePage;