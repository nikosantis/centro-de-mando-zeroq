import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background: #1c2f57;
    width: 100%;
  }

  #app {
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }

  .card {
    background: #2d4e83;
    color: #fff;
    .title {
      color: #fff;
    }
    .card-content {
      height: 105px;
    }
    .card-footer {
      border: none;
      background: #00d1b2;
      padding: 3px 10px;
      .card-info {
        margin: 0 10px;
        .icon {
          vertical-align: bottom;
        }
      }
    }
  }
  .card-false {
    background: #e2e2e2;
    color: #8b8b8b;
    .title {
      color: #8b8b8b;
    }
    .card-footer {
      border: none;
      background: #8b8b8b;
      .card-info {
        span {
          color: #fff;
        }
      }
    }
  }
`
