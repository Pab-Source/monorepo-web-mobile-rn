import { FC } from "react";
import { Login } from "module-web-standard";
import { theme } from "@pab-source/lib-shared-themes";
import "./style/main.less";

export const App: FC = () => <Login title={theme.global.color.primary} />;
