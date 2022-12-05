import styled from "styled-components";

// ****************************//
// Home Section
// ****************************//
export const MainHeading = styled.h1`
  font-size: 3.5rem;
  letter-spacing: 0.2em;
  color: #fff;
  font-style: bold;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 425px) {
    font-size: 1.3rem;
  }
  @media (max-width: 375px) {
   font-size: 1rem;
  }
`;

export const Container = styled.section`
  max-width: 1440px;
`;
export const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  font-size: 1rem;
  border: none;
  background-color: #3a3a3a;
  padding: 1rem 2rem;
  color: #fff;
  @media (max-width: 425px) {
    padding: 1rem 1.5rem;
  }

`;
export const SectionContainer = styled.div`
  padding: 7rem 4rem;
`;
export const DetailContainer = styled.div`
  padding: 7rem 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image2 = styled.img`
  width: 96%;
  @media (max-width: 1024px) {
    width: 122%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 98%;
  }
  @media (max-width: 820px) {
    width: 98%;
  }
`;
// ****************************//
// Shop Section
// ****************************//
export const ShopHeading = styled.h2`
  font-size: 3rem;
  letter-spacing: 0.2em;
  color: #fff;
  font-style: bold;
  font-weight: 700;
  text-align: center;

  @media (max-width: 425px) {
   font-size:1.5rem;
  }
`;


// ****************************//
// Product Section
// ****************************//
export const ProductHeading = styled.h4`
  font-size: 1.3rem;
  letter-spacing: 0.2em;
  color: #3a3a3a;
`;

// ****************************//
// Reuseable
// ****************************//
export const SecondaryHeading = styled.h3`
  font-size: 2rem;
  letter-spacing: 0.25rem;
  color: #3a3a3a;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;
export const Image = styled.img`
  width: 98%;

  @media (max-width: 425px) {
    width: 98%;
  }
  
`;
export const Description = styled.p`
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 100;
  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
  @media (max-width: 375px) {
   font-size: 0.6rem;
  }
`;
export const FooterHeading = styled.h5`
  font-size: 1.3rem;
  font-weight: 400;
  font-style: normal;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ColumnGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Btn = styled.button`
  display: inline-block;
  cursor: pointer;
  font-size: 1rem;
  border: none;
  background-color: #3a3a3a;
  padding: 1rem 4rem;
  color: #fff;

  @media (max-width: 375px) {
    padding: 1rem 2rem;
    font-size: 0.8rem;
  }
  @media (max-width: 320px) {
    padding: 1rem 3rem;
    font-size: 0.8rem;
  }
`;
export const DetailImg = styled.img`
  width: 250px;
`;
// ****************************//
// Cart Section
// ****************************//
export const CartImage = styled.img`
  width: 40px;
`;
export const CartHeading = styled.h4`
  font-size:2rem;
  text-align:center;
  color:#3a3a3a;
`;