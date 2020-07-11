import styled from "styled-components";

export const MainContent = styled.main`
  width: 933px;
  height: 312px;
  margin: 0 auto;
  border: solid 1px red;

  .wm-section {
    &__options {
      &-navigation {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      &-list {
        display: flex;
        &-item {
          list-style-type: none;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        &-icon {
        }
      }
    }
  }
`;
