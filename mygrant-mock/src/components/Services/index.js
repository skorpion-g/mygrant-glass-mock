import React from 'react';
import Icon1 from '../../images/delivery.png';
import Icon2 from '../../images/virtual.png';
import Icon3 from '../../images/maintenence.png';
import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <>
      <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>OEM Branding</ServicesH2>
                <ServicesP>OEM products are now available for purchase from a few specific Mygrant Glass locations</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Virtual Offices</ServicesH2>
                <ServicesP>You can access our platform online anywhere in the US in addition to our in-store locations</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Best Prices</ServicesH2>
                <ServicesP>We keep reviewing our inventory assortment, costs and prices for opportunities to share concessions with you</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
