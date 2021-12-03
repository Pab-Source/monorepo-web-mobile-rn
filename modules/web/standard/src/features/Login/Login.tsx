import React, { FC } from "react";
import { Button } from "@pab-source/lib-web-components";
import { theme } from "@pab-source/lib-shared-themes";

import type { LoginProps } from "./Login.props";

export const Login: FC<LoginProps> = ({ title }) => (
    <>
        <pre>{JSON.stringify(theme, null, 2)}</pre>
        <h1>{title}</h1>

        <Button />
    </>
);
