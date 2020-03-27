import styled from "styled-components";

export const Content = styled.div`
  height: 500px;
  display: flex;
  justify-content: space-between;
`;

export const Plasma = styled.div`
  transition: height 200ms;
  -moz-transition: height 200ms;
  -webkit-transition: height 200ms;
  -o-transition: height 200ms;
  -ms-transition: height 200ms;
  border-radius: 12px 12px 0 0;
  position: absolute;
  bottom: 49px;
  left: 2px;
  right: 0px;
  width: 10px;
  display: block;
  filter: blur(1px);
  -moz-filter: blur(1px);
  -webkit-filter: blur(1px);
  -o-filter: blur(1px);
  -ms-filter: blur(1px);
  height: 0;
  background: ${props => (props.color === "light" ? "#40ea38" : "#ff0202")};
`;

export const Label = styled.label`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 88;
  text-indent: -9999px;
  width: 15px;
  height: 50px;
  border-bottom: solid 4px grey;
  border-top: solid 5px grey;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  background: rgb(226, 226, 226); /* Old browsers */
  background: linear-gradient(
    to right,
    rgba(226, 226, 226, 1) 0%,
    rgba(219, 219, 219, 1) 50%,
    rgba(209, 209, 209, 1) 51%,
    rgba(254, 254, 254, 1) 100%
  ); /* W3C */
  background: -moz-linear-gradient(
    left,
    rgba(226, 226, 226, 1) 0%,
    rgba(219, 219, 219, 1) 50%,
    rgba(209, 209, 209, 1) 51%,
    rgba(254, 254, 254, 1) 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0%, rgba(226, 226, 226, 1)),
    color-stop(50%, rgba(219, 219, 219, 1)),
    color-stop(51%, rgba(209, 209, 209, 1)),
    color-stop(100%, rgba(254, 254, 254, 1))
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    left,
    rgba(226, 226, 226, 1) 0%,
    rgba(219, 219, 219, 1) 50%,
    rgba(209, 209, 209, 1) 51%,
    rgba(254, 254, 254, 1) 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    left,
    rgba(226, 226, 226, 1) 0%,
    rgba(219, 219, 219, 1) 50%,
    rgba(209, 209, 209, 1) 51%,
    rgba(254, 254, 254, 1) 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    left,
    rgba(226, 226, 226, 1) 0%,
    rgba(219, 219, 219, 1) 50%,
    rgba(209, 209, 209, 1) 51%,
    rgba(254, 254, 254, 1) 100%
  ); /* IE10+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=1 ); /* IE6-9 */
`;

export const Check = styled.input`
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  -moz-opacity: 0;
  -webkit-opacity: 0;
  -o-opacity: 0;
  -ms-opacity: 0;
  z-index: 77;

  &:checked ~ ${Plasma} {
    height: 250px;
  }
`;

export const Saber = styled.div`
  position: relative;
  width: 15px;
  height: 100%;
  margin: auto;
`;

export const Side = styled.div`
  width: 100%;
`;
