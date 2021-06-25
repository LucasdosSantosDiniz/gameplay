declare module "*.svg"{
    import React from "react";
    import { SvgProps } from "react-native-svg";

    const conteudo: React.FC<SvgProps>;

    export default conteudo;
}