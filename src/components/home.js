import React from 'react';
import styled from 'styled-components';

function Home() {
  const container = {
    padding: '0 3%',
  };

  return (
    <div style={container}>
      <Header>Welcome to Our Page!</Header>
      <div>
        <Paragraph>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse urna quam, congue quis viverra quis, ullamcorper sit amet nibh.
          Duis a erat dictum, convallis augue nec, suscipit dui.
          Cras aliquet, ipsum eget luctus cursus, felis arcu rutrum sem,
          id fermentum lectus diam eget sapien.
          Aenean eget urna dolor.Aliquam erat volutpat.
          Duis vehicula eros et libero dignissim lacinia.
          Nam cursus tortor neque, in aliquet dolor consequat varius.
          Phasellus facilisis, ligula quis cursus tristique, purus urna aliquet eros,
          vel pulvinar risus augue id justo.
          {' '}
        </Paragraph>
        <Paragraph>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse urna quam, congue quis viverra quis, ullamcorper sit amet nibh.
          Duis a erat dictum, convallis augue nec, suscipit dui.
          Cras aliquet, ipsum eget luctus cursus, felis arcu rutrum sem,
          id fermentum lectus diam eget sapien.
          Aenean eget urna dolor.Aliquam erat volutpat.
          Duis vehicula eros et libero dignissim lacinia.
          Nam cursus tortor neque, in aliquet dolor consequat varius.
          Phasellus facilisis, ligula quis cursus tristique, purus urna aliquet eros,
          vel pulvinar risus augue id justo.
          {' '}
        </Paragraph>
        <Paragraph>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse urna quam, congue quis viverra quis, ullamcorper sit amet nibh.
          Duis a erat dictum, convallis augue nec, suscipit dui.
          Cras aliquet, ipsum eget luctus cursus, felis arcu rutrum sem,
          id fermentum lectus diam eget sapien.
          Aenean eget urna dolor.Aliquam erat volutpat.
          Duis vehicula eros et libero dignissim lacinia.
          Nam cursus tortor neque, in aliquet dolor consequat varius.
          Phasellus facilisis, ligula quis cursus tristique, purus urna aliquet eros,
          vel pulvinar risus augue id justo.
          {' '}
        </Paragraph>
      </div>
    </div>
  );
}

export default Home;

const Header = styled.h2`
 padding-left:2%
`;

const Paragraph = styled.p`
font-weight : 500;
`;
