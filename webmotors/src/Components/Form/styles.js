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

      &-details {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        div {
          width: 49%;
        }
      }
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
  .form-group {
    &__block {
      &-details {
        margin: 0 0 15px 0;
        .form-make {
          &__select {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            background-color: #fff;
            cursor: pointer;
          }
        }
        .form-model {
          &__select {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            background-color: #fff;
            cursor: pointer;
          }
        }
      }
      .form-version {
        &__select {
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          background-color: #fff;
          cursor: pointer;
        }
      }
    }
  }
`;
