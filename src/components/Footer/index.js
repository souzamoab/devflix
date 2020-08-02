import React from 'react';
import { FooterBase } from './styles';
import Button from '../Button';

function Footer() {
  return (
    <FooterBase>
      <Button style={{ backgroundColor: "#10669a", fontSize: "20px"}} as="a" href="https://github.com/souzamoab">
        Moab Souza
      </Button>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
