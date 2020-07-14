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
        cursor: pointer;
      }
      &-label {
        padding: 0 0 0 10px;
        cursor: pointer;
      }
    }
  }
  .form-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &__block {
      &-filter {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        &-select {
          width: 49%;
          padding: 10px;
          background-color: #fff;
          border-radius: 5px;
          cursor: pointer;
        }
      }

      &-locale {
        margin: 0 0 15px 0;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        &-input {
          height: 100%;
          padding: 5px;
        }

        &-select {
          padding: 10px;
          background-color: #fff;
        }
      }

      &-details {
        margin: 0 0 15px 0;
        .form-make {
          position: relative;
          &__select {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            background-color: #fff;
            cursor: pointer;
          }
        }
        .form-model {
          position: relative;
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
        position: relative;
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
  .form-options {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0 0 0;

    &__search {
      width: 49%;
      font-size: 0.75rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      &-icon {
        &::before {
          color: #e23c44;
        }
      }

      &-text {
        color: #e23c44;
        font-family: "Poppins", sans-serif;
        cursor: pointer;

        .fa {
          margin: 0 5px 0 0;
        }
      }

      &-clear {
        width: 29%;
        cursor: pointer;
      }

      &-submit {
        width: 69%;
        text-align: center;
        text-transform: uppercase;
        padding: 15px;
        border-radius: 5px;
        background-color: #e23c44;
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;
