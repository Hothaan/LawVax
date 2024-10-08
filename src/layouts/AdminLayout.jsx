/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "@adminPages/Login";
import SuperMember from "@adminPages/SuperMember";
import GeneralMember from "@adminPages/GeneralMember";
import SuperMemberRegister from "@adminPages/SuperMemberRegister";
import GeneralMemberView from "@adminPages/GeneralMemberView";
import SuperPost from "@adminPages/SuperPost";
import GeneralPost from "@adminPages/GeneralPost";
import SuperPostRegister from "@adminPages/SuperPostRegister";
import GeneralPostRegister from "@adminPages/GeneralPostRegister";
import GeneralPostMy from "@adminPages/GeneralPostMy";
import Header from "@adminComponents/Header";
import SideBar from "@adminComponents/SideBar";

export default function AdminLayout() {
  const location = useLocation();
  if (location.pathname === "/admin/login") {
    return (
      <div css={login}>
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div css={others}>
        <Header />
        <SideBar />
        <Routes>
          {/* super 통합 관리자*/}
          <Route path="super/" element={<SuperMember />} />
          <Route path="super/register" element={<SuperMemberRegister />} />
          <Route path="super/post" element={<SuperPost />} />
          <Route path="super/post/register" element={<SuperPostRegister />} />
          {/* general 일반 관리자*/}
          <Route path="general/" element={<GeneralMember />} />
          <Route path="general/view" element={<GeneralMemberView />} />
          <Route path="general/post" element={<GeneralPost />} />
          <Route
            path="general/post/register"
            element={<GeneralPostRegister />}
          />
          <Route path="general/post/my" element={<GeneralPostMy />} />
        </Routes>
      </div>
    );
  }
}

const login = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: var(--mono-white);
`;

const others = css`
  margin: 72px 0px 0px 238px;
  box-sizing: border-box;
  padding: 30px;
  width: calc(100% - 238px);
  min-height: calc(100vh - 72px);
  background-color: var(--mono-gray-bg-1);
`;
