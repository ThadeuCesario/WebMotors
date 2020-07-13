import styled from "styled-components";

export const FormSearch = styled.form`
  background-color: #fff;
  margin: 10px 0 0 0;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .form-group {
    width: 100%;
    display: flex;
    flex-direction: row;

    &__block {
      width: 49%;
    }
  }
  .form-search {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    &__option {
      margin: 0 20px 0 0;
      &-input {
        margin: 0 10px 0 0;
      }
      &-label {
      }
    }
  }
`;
