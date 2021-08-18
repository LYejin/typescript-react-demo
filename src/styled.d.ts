// styled.definition.typescript typescript를 위해서 무언가를 정의한다.
import "styled-components";

// theme 선언하기
declare module "styled-components" {
  export interface DefaultTheme {
    blueColor: string;
  }
}
