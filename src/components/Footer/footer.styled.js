import styled from "styled-components";

export const ContainerFooter = styled.footer`
  margin-top: 9px;
  background-color: ${({theme}) => theme.colors.FOOTER};
  min-height: 451px;
  padding: 31px 51px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  .logofoot {
    color: ${({theme}) => theme.colors.FOOTER_BLACK};
    @media screen and (min-width: 992px) {
      padding: 0 15px;
    }  
  }

  @media screen and (min-width: 992px) {
    text-align: left;
    flex-direction: row;
    padding: 31px 108px;
  }

  & img {
    max-width: 89px;
    height: auto;
    width: 100%;
  }

  & .contact,
  & .telephone-lines,
  & .inicio,
  & .address {
    margin-bottom: 20px;
    display: block;
    position: relative;
  }

  & .contact-p {
    font-weight: 700;
    a {
      color: ${({theme}) => theme.colors.FOOTER_BLACK};
      text-decoration: none;
    }
  }

  & .red-item {
    display: inline-block;
    height: 30px;
    width: 30px;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0 3px;

    a {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
`;
ContainerFooter.displayName = 'ContainerFooter';

export const ContainerDesktopFooter = styled.div`
  display: none;

  @media screen and (min-width: 992px) {
    display: block;
  }

  .text-transform {
    text-transform: none;
  }

  .nav {
    display: flex;
    width: 100%;
    text-align: left;

    .nav-menu {
      width: 25%;
      padding: 0 15px;

      .leaf {
        margin-bottom: 14px;
        color: #333;
      }
    }
  }

  & .leaf-title {
    font-size: 20px;
    font-weight: 700;
  }

  .leaf a {
    color: ${({theme}) => theme.colors.FOOTER_BLACK};
    text-decoration: none;
  }

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
ContainerDesktopFooter.displayName = "ContainerDesktopFooter";
