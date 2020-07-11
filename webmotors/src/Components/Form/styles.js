import styled from "styled-components";

export const MainContent = styled.main`
  width: 933px;
  height: 312px;
  margin: 0 auto;
  padding: 10px;
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
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 40%;
        &-item {
          list-style-type: none;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          .fa {
            &::before {
              color: #696977;
              transition: color 0.4s;
            }
          }

          &.is--active {
            .fa {
              &::before {
                color: #e23c44;
                transition: color 0.4s;
              }
            }

            &-icon {
              border: solid 1px red;
            }
          }
        }
        &-icon {
          margin: 0 10px 0 0;
          line-height: 20px;
          &::before {
            font-size: 2rem;
          }
        }
        &-title {
          &:last-child {
            text-transform: uppercase;
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;
