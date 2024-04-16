import styled from "styled-components";

export default function StyledComponents() {
  // Create a Title component that'll render an <h1> tag with some styles
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #bf4f74;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  const Button = styled.button<{ $primary?: boolean }>`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
    color: ${(props) => (props.$primary ? "white" : "#BF4F74")};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 3px;
  `;

  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button>Normal</Button>
        <Button $primary>Primary</Button>
      </div>
    </Wrapper>
  );
}
