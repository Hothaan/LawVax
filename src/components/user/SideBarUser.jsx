/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import closeBtn from "@images/close-outline.svg";

function SideBarBtn() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const [isNavVisible, setNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  const closeNav = () => {
    setNavVisible(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    if (isMainPage) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMainPage]);

  return (
    <>
      <div css={side_btn} onClick={toggleNav}>
        <span css={line(isMainPage, isScrolled)}></span>
        <span css={line(isMainPage, isScrolled)}></span>
        <span css={line(isMainPage, isScrolled)}></span>
      </div>

      <nav css={nav_style(isNavVisible)}>
        <div css={btn_container}>
          <span css={kor_btn}>KOR</span>
          <span css={eng_btn}>ENG</span>
          <button css={close_btn} onClick={closeNav}>
            <img src={closeBtn} alt="닫기 버튼" />
          </button>
        </div>

        <ul css={link_1}>
          <li>
            <Link to="/introduction" onClick={closeNav}>
              LawVax
            </Link>
          </li>
          <li>
            <Link to="/field" onClick={closeNav}>
              업무분야
            </Link>
          </li>
          <li>
            <Link to="/professional" onClick={closeNav}>
              구성원
            </Link>
          </li>
          <li>
            <Link to="/lawNews" onClick={closeNav}>
              법인소식
            </Link>
          </li>
          <li>
            <Link to="/newsLetter" onClick={closeNav}>
              뉴스레터
            </Link>
          </li>
        </ul>

        <hr />

        <ul css={link_2}>
          <li>기업 감사/내부통제 지원</li>
          <li>기술보호센터</li>
        </ul>

        <hr />

        <ul css={link_2}>
          <li>오시는 길</li>
          <li>연락처</li>
        </ul>
      </nav>
    </>
  );
}

export default SideBarBtn;

const side_btn = css`
  width: 48px;
  height: 48px;
  margin: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const line = (isMainPage, isScrolled) => css`
  width: 36px;
  height: 3px;
  background-color: ${isMainPage && !isScrolled
    ? `var(--mono-white)`
    : `var(--point-color-3)`};
  margin: 3px 0;
  border-radius: 30px;
`;

const nav_style = (isNavVisible) => css`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1024px;
  height: 100vh;
  background-color: var(--mono-white);
  padding: 28px 16px 0 16px;

  transform: ${isNavVisible ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;

  justify-content: flex-start;
  overflow-y: auto;
  box-sizing: border-box;
  z-index: 1000;

  hr {
    border: 1px solid var(--mono-gray-line-1);
    margin: 0;
  }

  li,
  span {
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    display: ${isNavVisible ? "block" : "none"};
  }
`;

const btn_container = css`
  display: flex;
  align-items: start;
  justify-content: space-between;
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  padding: 0 16px 0 32px;
  box-sizing: border-box;
`;

const kor_btn = css`
  color: var(--point-color-2);
  margin-right: 28px;
`;

const eng_btn = css`
  color: var(--mono-gray-txt-light);
  margin-right: auto;
`;

const close_btn = css`
  width: 48px;
  height: 48px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const link_1 = css`
  padding: 18px 32px 48px;
  color: var(--mono-gray-txt-dark);
  display: flex;
  flex-direction: column;
  gap: 44px;

  li {
    font-size: 32px;
    font-weight: 400;

    a {
      font-weight: 400;
      text-decoration: none;
      color: inherit;
    }
  }
`;

const link_2 = css`
  padding: 44px 32px;
  color: var(--mono-gray-txt-dark);
  display: flex;
  flex-direction: column;
  gap: 28px;

  li {
    font-size: 20px;
    font-weight: 400;
  }
`;
