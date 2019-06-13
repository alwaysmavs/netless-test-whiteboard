import * as React from "react";
import {AppRouter, HistoryType} from "@netless/i18n-react-router";
import {language} from "../locale";
import {message} from "antd";
import WhiteboardPage from "./WhiteboardPage";
import PlayerPage from "./PlayerPage";
import PageInput from "./PageInput";
export class AppRoutes extends React.Component<{}, {}> {

    public constructor(props: {}) {
        super(props);
    }

    public componentDidCatch(error: any, inf: any): void {
        message.error(`网页加载发生错误：${error}`);
    }

    public render(): React.ReactNode {
        return (
            <AppRouter historyType={HistoryType.HashRouter} language={language} routes={[
                {path: "/", component: PageInput},
                {path: "/whiteboard/:roomToken/:uuid/:version?/:readOnly?/", component: WhiteboardPage},
                {path: "/replay/:roomToken/:uuid/:userId/:version?/", component: PlayerPage},
            ]}/>
        );
    }
}