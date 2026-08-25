/* @ds-bundle: {"format":4,"namespace":"REDIDesignSystem_ac846f","components":[{"name":"BigTextCTA","sourcePath":"components/actions/BigTextCTA.jsx"},{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"PlayButton","sourcePath":"components/actions/PlayButton.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"BrandLockup","sourcePath":"components/brand/BrandLockup.jsx"},{"name":"LoadingMark","sourcePath":"components/brand/LoadingMark.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ScrollableList","sourcePath":"components/content/ScrollableList.jsx"},{"name":"GetInvolvedButtonHoverState","sourcePath":"components/figma-sets/GetInvolvedButtonHoverState.jsx"},{"name":"GetScreened","sourcePath":"components/figma-sets/GetScreened.jsx"},{"name":"OurMissonButtonHoverState","sourcePath":"components/figma-sets/OurMissonButtonHoverState.jsx"},{"name":"UnderlineAnimation","sourcePath":"components/figma-sets/UnderlineAnimation.jsx"},{"name":"MediaCard","sourcePath":"components/media/MediaCard.jsx"},{"name":"Underline","sourcePath":"components/media/Underline.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"MobileMenu","sourcePath":"components/navigation/MobileMenu.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"},{"name":"ProgressTrack","sourcePath":"components/sections/ProgressTrack.jsx"},{"name":"SectionRule","sourcePath":"components/sections/SectionRule.jsx"},{"name":"WHAT_WE_DO_STEPS","sourcePath":"components/sections/WhatWeDo.jsx"},{"name":"WhatWeDo","sourcePath":"components/sections/WhatWeDo.jsx"}],"sourceHashes":{"components/actions/BigTextCTA.jsx":"16943455a0a9","components/actions/Button.jsx":"438410d34038","components/actions/PlayButton.jsx":"ec740f38b3dc","components/actions/TextLink.jsx":"e6c5b0f3154a","components/brand/BrandLockup.jsx":"87455b6194a7","components/brand/LoadingMark.jsx":"c1fb0b7ca67b","components/brand/Logo.jsx":"ff6749ae898a","components/content/ScrollableList.jsx":"ee32ad0484b6","components/figma-sets/GetInvolvedButtonHoverState.jsx":"c06e037f0ff3","components/figma-sets/GetScreened.jsx":"faeb3d4bfe61","components/figma-sets/OurMissonButtonHoverState.jsx":"fd5e2555253a","components/figma-sets/UnderlineAnimation.jsx":"d67b0ed049d8","components/media/MediaCard.jsx":"fc76395d22ec","components/media/Underline.jsx":"0a7c9cf00bbf","components/navigation/Footer.jsx":"2181b22ca24b","components/navigation/Header.jsx":"40bd31dc8f92","components/navigation/MobileMenu.jsx":"51b714393dab","components/navigation/NavLink.jsx":"5640be466673","components/sections/ProgressTrack.jsx":"a34ba8ccaa2f","components/sections/SectionRule.jsx":"d7c02366a525","components/sections/WhatWeDo.jsx":"ab866ae1325c","ui_kits/website/RediAbout.jsx":"b510afb20f57","ui_kits/website/RediHome.jsx":"167688d4a239","ui_kits/website/RediMobile.jsx":"f3f32f2ce446","ui_kits/website/RediPress.jsx":"b0991432e35f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.REDIDesignSystem_ac846f = window.REDIDesignSystem_ac846f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/BigTextCTA.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BIG TEXT CTA — "Get Screened". 41px Neue Haas Bold in Redi Red.
 * Hover reveals a 15px rule beneath (Figma "Get Screened", Property 1=Variant2).
 */
function BigTextCTA({
  children = "Get Screened",
  href = "#",
  size = 41,
  tone = "var(--redi-red)",
  state,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const on = state === "active" || state === undefined && hover;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-block",
      fontFamily: "var(--font-grotesk-bold)",
      fontWeight: 700,
      fontSize: size,
      lineHeight: 0.96,
      color: tone,
      textDecoration: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      height: 15,
      borderRadius: "var(--radius-hairline)",
      background: tone,
      transformOrigin: "left center",
      transform: `scaleX(${on ? 1 : 0})`,
      transition: "transform var(--dur-slow) var(--ease-standard)"
    }
  }));
}
Object.assign(__ds_scope, { BigTextCTA, __ds_default_components_actions_BigTextCTA_y593c9: BigTextCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/BigTextCTA.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILLS = {
  neutral: "var(--neutral-01)",
  mist: "var(--mist)",
  white: "var(--white)"
};

/**
 * PRIMARY CTA 1 — the full-width filled bar. Style guide: "Buttons invert on hover."
 */
function Button({
  children = "Our Mission",
  fill = "neutral",
  size = "full",
  as = "button",
  href,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const inverted = hover && !disabled;
  const Tag = href ? "a" : as;
  const height = size === "compact" ? 40 : 58;
  const fontSize = size === "compact" ? 12 : 14;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: as === "button" && !href ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      width: "100%",
      height,
      padding: "4px 0",
      border: "none",
      boxSizing: "border-box",
      borderRadius: "var(--radius-hairline)",
      background: inverted ? "var(--black)" : FILLS[fill] || fill,
      color: inverted ? "var(--neutral-02)" : "var(--black)",
      fontFamily: "var(--font-grotesk-bold)",
      fontWeight: 700,
      fontSize,
      lineHeight: 0.96,
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      textDecoration: "none",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button, __ds_default_components_actions_Button_8qpwqe: Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/PlayButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular play control. 58.867px disc, 34.081px triangle. Inverts on hover. */
function PlayButton({
  size = 58.867,
  label = "Play",
  variant = "default",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const glyph = size / 58.867 * 34.081;
  const dark = variant === "inverse" ? !hover : hover;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      border: "none",
      borderRadius: "var(--radius-pill)",
      background: dark ? "var(--black)" : "var(--neutral-01)",
      color: dark ? "var(--neutral-01)" : "var(--black)",
      cursor: "pointer",
      transition: "background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: glyph,
    height: glyph,
    viewBox: "0 0 34.081 34.081",
    fill: "currentColor",
    style: {
      transform: "rotate(90deg)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.699 2.324 C 16.295 1.291 17.786 1.291 18.382 2.324 L 30.457 23.237 C 31.053 24.27 30.307 25.561 29.115 25.561 L 4.966 25.561 C 3.774 25.561 3.028 24.27 3.625 23.237 L 15.699 2.324 Z"
  })));
}
Object.assign(__ds_scope, { PlayButton, __ds_default_components_actions_PlayButton_ntrcbw: PlayButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/PlayButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SECONDARY CTA — 19px TT Rationalist Bold with a 3px rule beneath.
 * Active States board: the rule turns Redi Red on hover.
 */
function TextLink({
  children = "Read More",
  href = "#",
  size = 19,
  tone = "var(--text-primary)",
  underline = true,
  state,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const active = state === "active" || state === undefined && hover;
  const ruleH = size >= 19 ? 3 : 2;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-block",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size,
      lineHeight: 0.97,
      letterSpacing: "-0.01em",
      color: tone,
      textDecoration: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, children), underline ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      height: ruleH,
      marginTop: size >= 19 ? 1 : 0,
      background: active ? "var(--redi-red)" : tone,
      transition: "background var(--dur-base) var(--ease-standard)"
    }
  }) : null);
}
Object.assign(__ds_scope, { TextLink, __ds_default_components_actions_TextLink_1pkoudp: TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/brand/BrandLockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * "Ratner Early Detection Initiative" set as a stacked lock-up in TT Rationalist Bold.
 * Filed under "brand icons" on the style-guide Components board.
 */
function BrandLockup({
  size = 30,
  tone = "var(--black)",
  lines,
  style,
  ...rest
}) {
  const rows = lines || ["Ratner", "Early", "Detection", "Initiative"];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size,
      lineHeight: 1.16,
      letterSpacing: "-0.01em",
      color: tone,
      ...style
    }
  }, rest), rows.map(l => /*#__PURE__*/React.createElement("div", {
    key: l
  }, l)));
}
Object.assign(__ds_scope, { BrandLockup, __ds_default_components_brand_BrandLockup_1p6x551: BrandLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BrandLockup.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PATHS = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M126.66,91.62h27.43c-5.01,18.49-21.47,27.88-40.59,27.88-23.03,0-43.1-17.55-43.1-42.45s20.06-42.45,43.1-42.45c28.37,0,44.97,22.71,41.53,50.91h-57.2c2.51,7.37,8.62,11.27,15.82,11.27,6.12,0,10.35-1.41,13.01-5.17h0ZM98.14,68.29h29.46c-.78-4.86-5.64-10.66-14.1-10.66-6.9,0-12.85,3.75-15.36,10.66Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M246.56,2.4v114.24h-26.29v-5.18c-4.12,3.35-11.13,7-21.19,7-20.88,0-37.34-17.51-37.34-41.25s16.46-41.25,37.34-41.25c10.06,0,17.07,3.66,21.19,7V2.4h26.29ZM205.34,94.43c9,0,15.54-7,15.54-17.2s-6.55-17.2-15.54-17.2-15.54,7-15.54,17.2,6.71,17.2,15.54,17.2Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M269.34,94.91h7.04v-32.33h-13.56v-22.05h39.94v54.37h18.03v22.05h-62.44v-22.05h10.99Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M288.74,0c-9.4,0-17.17,7.43-17.17,16.9s7.77,16.75,17.17,16.75,17.17-7.28,17.17-16.75-7.77-16.9-17.17-16.9Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M57.49,36.5c-18.69.55-19.03,13.39-19.03,13.39v-13.39h-.34s-5.6,0-5.6,0c-3.63-.01-8.29-.06-10.42,0H0v21.98h11.49v37.33H0v21.98h48.08v-21.98h-11.12v-20.51c0-5.35,1.52-10.43,3.91-12.69,2.45-2.31,6.19-3.84,12.07-3.84h14.48v-22.28h-9.92Z"
}));
const TONES = {
  black: "var(--black)",
  red: "var(--redi-red)",
  white: "var(--white)",
  inherit: "currentColor"
};

/** The redi wordmark. Mark alone is 320.78×119.5; with the rule it is 320.78×153.6. */
function Logo({
  tone = "black",
  width = 215.09,
  rule = true,
  title = "redi",
  style,
  ...rest
}) {
  const fill = TONES[tone] || tone;
  const h = rule ? 153.6 : 119.5;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: `0 0 320.78 ${h}`,
    width: width,
    height: width * h / 320.78,
    fill: fill,
    role: "img",
    "aria-label": title,
    style: {
      display: "block",
      flexShrink: 0,
      ...style
    }
  }, rest), PATHS, rule ? /*#__PURE__*/React.createElement("rect", {
    y: "131.61",
    width: "320.78",
    height: "21.99"
  }) : null);
}
Object.assign(__ds_scope, { Logo, __ds_default_components_brand_Logo_1q8yv4x: Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/LoadingMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Loading animation: the red redi mark, with the rule wiping in left-to-right.
 * The style-guide board shows the mark without its rule; the rule is the animation.
 */
function LoadingMark({
  width = 187,
  duration = 1200,
  loop = true,
  style,
  ...rest
}) {
  const scale = width / 320.78;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width,
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, `@keyframes redi-rule-wipe{0%{transform:scaleX(0)}55%{transform:scaleX(1)}100%{transform:scaleX(1)}}`), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    tone: "red",
    width: width,
    rule: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: 21.99 * scale,
      marginTop: 12.11 * scale,
      background: "var(--redi-red)",
      transformOrigin: "left center",
      animation: `redi-rule-wipe ${duration}ms var(--ease-standard) ${loop ? "infinite" : "1 forwards"}`
    }
  }));
}
Object.assign(__ds_scope, { LoadingMark, __ds_default_components_brand_LoadingMark_170rgjd: LoadingMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LoadingMark.jsx", error: String((e && e.message) || e) }); }

// components/content/ScrollableList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SCROLLABLE LIST — a stack of big-text CTAs where the focused row is Redi Red
 * and the rest sit back in neutral-02.
 */
function ScrollableList({
  items = ["Partner with REDI", "Support the Work", "Get Screened", "Read More", "Contact Us"],
  active = 2,
  onSelect,
  size = 41,
  gap = 6,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gap,
      justifyItems: "start",
      ...style
    }
  }, rest), items.map((label, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement(__ds_scope.BigTextCTA, {
      key: label,
      size: size,
      tone: on ? "var(--redi-red)" : "var(--neutral-02)",
      state: "default",
      onClick: e => {
        if (onSelect) {
          e.preventDefault();
          onSelect(i);
        }
      },
      onMouseEnter: () => onSelect && onSelect(i)
    }, label);
  }));
}
Object.assign(__ds_scope, { ScrollableList, __ds_default_components_content_ScrollableList_1rwp9ab: ScrollableList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ScrollableList.jsx", error: String((e && e.message) || e) }); }

// components/figma-sets/GetInvolvedButtonHoverState.jsx
try { (() => {
/** Figma component set "Get Involved Button (Hover State)". Alias for `Button`. */
function GetInvolvedButtonHoverState(props) {
  return /*#__PURE__*/React.createElement(__ds_scope.Button, props, props.children ?? "Get Involved");
}
Object.assign(__ds_scope, { GetInvolvedButtonHoverState, __ds_default_components_figma_sets_GetInvolvedButtonHoverState_m8tyg1: GetInvolvedButtonHoverState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/figma-sets/GetInvolvedButtonHoverState.jsx", error: String((e && e.message) || e) }); }

// components/figma-sets/GetScreened.jsx
try { (() => {
/** Figma component set "Get Screened". Alias for `BigTextCTA`. */
function GetScreened(props) {
  return /*#__PURE__*/React.createElement(__ds_scope.BigTextCTA, props, props.children ?? "Get Screened");
}
Object.assign(__ds_scope, { GetScreened, __ds_default_components_figma_sets_GetScreened_g5y2iq: GetScreened });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/figma-sets/GetScreened.jsx", error: String((e && e.message) || e) }); }

// components/figma-sets/OurMissonButtonHoverState.jsx
try { (() => {
/** Figma component set "Our Misson Button (Hover State)". Alias for `Button`. */
function OurMissonButtonHoverState(props) {
  return /*#__PURE__*/React.createElement(__ds_scope.Button, props, props.children ?? "Our Mission");
}
Object.assign(__ds_scope, { OurMissonButtonHoverState, __ds_default_components_figma_sets_OurMissonButtonHoverState_1ahk9c9: OurMissonButtonHoverState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/figma-sets/OurMissonButtonHoverState.jsx", error: String((e && e.message) || e) }); }

// components/media/MediaCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Press card — 445×312 image, 30px Neue Haas Bold title, an underlined link. Videos carry a 74px play disc. */
function MediaCard({
  image,
  title = "Cancer hospitals' cancer prevention plans — and what's foiling them",
  kind = "article",
  linkLabel,
  showLink = true,
  href = "#",
  width = 445,
  onPlay,
  style,
  ...rest
}) {
  const label = linkLabel || (kind === "video" ? "Watch" : "Read Article");
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      width,
      display: "grid",
      gap: 24,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "445 / 312",
      borderRadius: "var(--radius-hairline)",
      background: image ? `url(${image}) center / cover no-repeat` : "var(--neutral-01)",
      display: "grid",
      placeItems: "center"
    }
  }, kind === "video" ? /*#__PURE__*/React.createElement(__ds_scope.PlayButton, {
    size: 74,
    variant: "inverse",
    onClick: onPlay
  }) : null), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-grotesk-bold)",
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1,
      color: "var(--text-primary)"
    }
  }, title), showLink ? /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    href: href,
    style: {
      justifySelf: "start"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { MediaCard, __ds_default_components_media_MediaCard_15e9yw3: MediaCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/MediaCard.jsx", error: String((e && e.message) || e) }); }

// components/media/Underline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Underline Animation — the 15px red bar that wipes across a headline.
 * Figma component set "Underline Animation": Default (drawn) / Variant2 (empty).
 */
function Underline({
  width = 659,
  height = 15,
  on = true,
  duration = 420,
  tone = "var(--redi-red-underline)",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width,
      height,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      borderRadius: "var(--radius-hairline)",
      background: tone,
      transformOrigin: "left center",
      transform: `scaleX(${on ? 1 : 0})`,
      transition: `transform ${duration}ms var(--ease-standard)`
    }
  }));
}
Object.assign(__ds_scope, { Underline, __ds_default_components_media_Underline_zc5d67: Underline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Underline.jsx", error: String((e && e.message) || e) }); }

// components/figma-sets/UnderlineAnimation.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Figma component set "Underline Animation". Alias for `Underline`. */
function UnderlineAnimation(props) {
  return /*#__PURE__*/React.createElement(__ds_scope.Underline, _extends({}, props, {
    on: props.property1 === "variant2" ? false : props.on
  }));
}
Object.assign(__ds_scope, { UnderlineAnimation, __ds_default_components_figma_sets_UnderlineAnimation_1fav6rj: UnderlineAnimation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/figma-sets/UnderlineAnimation.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_LINKS = ["Our Mission", "Contact Us", "What We do", "Bruce’s Story", "Press", "get involved"];

/** Site footer — a neutral-01 field with the wordmark set oversized on the right. */
function Footer({
  breakpoint = "desktop",
  links = DEFAULT_LINKS,
  name = "Ratner Early Detection Initiative",
  style,
  ...rest
}) {
  const mobile = breakpoint === "mobile";
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      position: "relative",
      background: "var(--surface-footer)",
      height: mobile ? 544 : 532,
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: mobile ? 18 : 22,
      padding: mobile ? "40px var(--gutter-mobile) 0" : "56px var(--gutter-desktop) 0",
      fontFamily: "var(--font-grotesk)",
      fontWeight: 450,
      fontSize: 14,
      lineHeight: 0.97,
      letterSpacing: "0.01em",
      textTransform: "capitalize",
      justifyItems: "start"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, l)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: mobile ? 8 : 16,
      textTransform: "none"
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: mobile ? {
      position: "absolute",
      left: 10,
      bottom: 12,
      width: 355
    } : {
      position: "absolute",
      right: 31,
      top: 41.445,
      width: 925
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    width: mobile ? 355 : 925
  })));
}
Object.assign(__ds_scope, { Footer, __ds_default_components_navigation_Footer_1v7o0mg: Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MobileMenu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_ITEMS = ["our mission", "press", "get involved", "info"];

/** Full-screen mobile menu — 48px TT Rationalist Bold items, centred, with a red rule marking the current page. */
function MobileMenu({
  items = DEFAULT_ITEMS,
  current = "get involved",
  onClose,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      width: 375,
      height: 688,
      background: "var(--white)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 355,
      height: 660.978
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close menu",
    onClick: onClose,
    style: {
      position: "absolute",
      left: 0,
      top: 2,
      width: 38.071,
      height: 37.85,
      padding: 0,
      border: "none",
      background: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0.747,
      top: 32.374,
      width: 45.785,
      height: 7,
      background: "var(--black)",
      transform: "rotate(-45deg)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 4.95,
      top: 0.525,
      width: 45.785,
      height: 7,
      background: "var(--black)",
      transform: "rotate(45deg)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 118,
      top: 0,
      width: 120
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    width: 120
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 180,
      display: "grid",
      gap: 26,
      justifyItems: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1.02,
      letterSpacing: "-0.02em"
    }
  }, items.map(label => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    style: {
      color: "var(--text-primary)",
      textDecoration: "none",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      height: 7,
      marginTop: 2,
      background: "var(--redi-red)",
      transform: `scaleX(${label === current ? 1 : 0})`,
      transformOrigin: "center",
      transition: "transform var(--dur-base) var(--ease-standard)"
    }
  }))))));
}
Object.assign(__ds_scope, { MobileMenu, __ds_default_components_navigation_MobileMenu_kzxfhi: MobileMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MobileMenu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Top-level nav item. The current page carries a Redi Red rule. */
function NavLink({
  children,
  href = "#",
  current = false,
  size = 19,
  tone = "var(--text-primary)",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  if (current) return /*#__PURE__*/React.createElement(__ds_scope.TextLink, _extends({
    href: href,
    size: size,
    tone: tone,
    state: "active",
    style: style
  }, rest), children);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-block",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size,
      lineHeight: 0.97,
      letterSpacing: "-0.01em",
      color: tone,
      textDecoration: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      height: 3,
      marginTop: 1,
      background: "var(--redi-red)",
      transformOrigin: "left center",
      transform: `scaleX(${hover ? 1 : 0})`,
      transition: "transform var(--dur-base) var(--ease-standard)"
    }
  }));
}
Object.assign(__ds_scope, { NavLink, __ds_default_components_navigation_NavLink_zxfsmk: NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_ITEMS = [{
  label: "info",
  href: "#"
}, {
  label: "our mission",
  href: "#"
}, {
  label: "press",
  href: "#"
}, {
  label: "get involved",
  href: "#"
}, {
  label: "contact",
  href: "#"
}];

/** Site header. Logo centred, nav split around it on desktop; hamburger + centred logo on mobile. */
function Header({
  breakpoint = "desktop",
  items = DEFAULT_ITEMS,
  current = "info",
  onMenu,
  style,
  ...rest
}) {
  if (breakpoint === "mobile") {
    return /*#__PURE__*/React.createElement("header", _extends({
      style: {
        position: "relative",
        height: 76,
        background: "var(--white)",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Open menu",
      onClick: onMenu,
      style: {
        position: "absolute",
        left: 11,
        top: 23,
        width: 38,
        height: 20,
        padding: 0,
        border: "none",
        background: "none",
        cursor: "pointer",
        display: "grid",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        width: 38,
        height: 7,
        background: "var(--black)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        width: 38,
        height: 7,
        background: "var(--black)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 128,
        top: 9
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
      width: 120
    })));
  }
  const size = breakpoint === "tablet" ? 12 : 19;
  const logoW = breakpoint === "tablet" ? 150 : 215.09;
  const left = items.slice(0, Math.ceil(items.length / 2));
  const right = items.slice(Math.ceil(items.length / 2));
  const row = {
    display: "flex",
    alignItems: "flex-start",
    gap: breakpoint === "tablet" ? 40 : 120
  };
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      padding: "27px var(--gutter-desktop) 32px",
      background: "var(--white)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("nav", {
    style: row
  }, left.map(i => /*#__PURE__*/React.createElement(__ds_scope.NavLink, {
    key: i.label,
    href: i.href,
    size: size,
    current: i.label === current
  }, i.label))), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    width: logoW
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      ...row,
      justifyContent: "flex-end"
    }
  }, right.map(i => /*#__PURE__*/React.createElement(__ds_scope.NavLink, {
    key: i.label,
    href: i.href,
    size: size,
    current: i.label === current
  }, i.label))));
}
Object.assign(__ds_scope, { Header, __ds_default_components_navigation_Header_1wawagy: Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/sections/ProgressTrack.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Section progress bar — a neutral-02 track with a Redi Red fill. Used by "What We Do". */
function ProgressTrack({
  value = 1,
  total = 4,
  height = 15,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(1, value / total)) * 100;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": total,
    style: {
      position: "relative",
      width: "100%",
      height,
      borderRadius: "var(--radius-hairline)",
      background: "var(--rule-inactive)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      width: `${pct}%`,
      borderRadius: "var(--radius-hairline)",
      background: "var(--rule-active)",
      transition: "width var(--dur-slow) var(--ease-standard)"
    }
  }));
}
Object.assign(__ds_scope, { ProgressTrack, __ds_default_components_sections_ProgressTrack_1kosy7v: ProgressTrack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/ProgressTrack.jsx", error: String((e && e.message) || e) }); }

// components/sections/SectionRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The 15px full-bleed rule that opens every section. */
function SectionRule({
  tone = "var(--rule)",
  height = 15,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "100%",
      height,
      borderRadius: "var(--radius-hairline)",
      background: tone,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { SectionRule, __ds_default_components_sections_SectionRule_12tqam: SectionRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/SectionRule.jsx", error: String((e && e.message) || e) }); }

// components/sections/WhatWeDo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WHAT_WE_DO_STEPS = [{
  n: "01",
  label: "research",
  body: "Partnering with physicians, scientists, healthcare institutions and tech companies to fund and promote cutting-edge early detection technologies."
}, {
  n: "02",
  label: "Policy, Advocacy & Insurance Reform",
  body: "Working with government and healthcare professionals to make cancer care and insurance more accessible, screening more effective, and to help reduce disparities in underserved communities."
}, {
  n: "03",
  label: "Public Awareness",
  body: "Campaigning to break stigma, spread awareness, and motivate people to get screened."
}, {
  n: "04",
  label: "Publishing & Insight",
  body: "Producing books, papers, and conversations that challenge outdated models and advance bold thinking in cancer detection."
}];

/**
 * "04 What We Do" — the four-step section. Numbered list on the right, the active step's
 * copy set large in Redi Red beneath it, a progress bar between them.
 * Step 04 also exposes the Speaking Engagements CTA.
 */
function WhatWeDo({
  breakpoint = "desktop",
  step = 1,
  onStep,
  steps = WHAT_WE_DO_STEPS,
  title = "What We Do",
  intro = "As both a think tank and a foundation, we advocate for early detection while supporting pilot initiatives and emerging technology research.",
  style,
  ...rest
}) {
  const mobile = breakpoint === "mobile";
  const active = steps[Math.max(0, Math.min(steps.length - 1, step - 1))];
  const listSize = mobile ? 20 : 30;
  const bodySize = mobile ? 33 : 44;
  const list = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: mobile ? 3 : 7
    }
  }, steps.map((s, i) => {
    const on = i === step - 1;
    return /*#__PURE__*/React.createElement("button", {
      key: s.n,
      onClick: () => onStep && onStep(i + 1),
      style: {
        appearance: "none",
        border: "none",
        background: "none",
        padding: 0,
        textAlign: "left",
        cursor: onStep ? "pointer" : "default",
        fontFamily: "var(--font-display)",
        fontWeight: 450,
        fontSize: listSize,
        lineHeight: 1,
        textTransform: "capitalize",
        color: on ? "var(--redi-red)" : "var(--neutral-02)",
        transition: "color var(--dur-base) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "0.72em",
        verticalAlign: "super"
      }
    }, s.n), /*#__PURE__*/React.createElement("span", null, " ", s.label));
  }));
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: mobile ? "var(--neutral-01)" : "var(--surface-section)",
      padding: mobile ? "45px var(--gutter-mobile) 40px" : "45px var(--gutter-desktop) 60px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: mobile ? {
      display: "grid",
      gap: 24
    } : {
      display: "grid",
      gridTemplateColumns: "600px 1fr",
      columnGap: 330,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: mobile ? 12 : 19,
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-grotesk-bold)",
      fontWeight: 700,
      fontSize: mobile ? 28 : 41,
      lineHeight: 0.96
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-grotesk)",
      fontWeight: 450,
      fontSize: mobile ? 16 : 24,
      lineHeight: mobile ? 1.1 : 1.15,
      letterSpacing: "0.01em",
      maxWidth: 600
    }
  }, intro), /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    size: mobile ? 12 : 19,
    style: {
      justifySelf: "start"
    }
  }, "Read More")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: mobile ? 20 : 30,
      alignContent: "start"
    }
  }, list, /*#__PURE__*/React.createElement(__ds_scope.ProgressTrack, {
    value: step,
    total: steps.length,
    height: mobile ? 7 : 15
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 450,
      fontSize: bodySize,
      lineHeight: mobile ? 1 : "45px",
      letterSpacing: "-0.02em",
      color: "var(--redi-red)"
    }
  }, active.body), step === 4 ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    fill: "white"
  }, "Speaking Engagements") : null)));
}
Object.assign(__ds_scope, { WHAT_WE_DO_STEPS, WhatWeDo, __ds_default_components_sections_WhatWeDo_1kw6t6c: WhatWeDo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/WhatWeDo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RediAbout.jsx
try { (() => {
/* global React, RediNav, RediFooter */
const {
  Button,
  SectionRule
} = window.REDIDesignSystem_ac846f;
const BOARD_A = [["Martin Vácha", "Founder"], ["Daniel Quisek", "Partner"]];
const BOARD_B = [["Veronika Kráľová", "Scientist"], ["Andrea Vacovská", "Lawyer"], ["David Řeřicha", "Consultant"], ["Viktor Mizera", "Studio Assistant"], ["Marek Čuban", "Policy maker"], ["Nikola Kubíčková", "Policy maker"]];
const TEAM = [...BOARD_A, ...BOARD_B];
const nameStyle = {
  fontFamily: "var(--font-grotesk-bold)",
  fontWeight: 700,
  fontSize: 41,
  lineHeight: 1
};
const headStyle = {
  fontFamily: "var(--font-display)",
  fontWeight: 450,
  fontSize: 44,
  lineHeight: "45px",
  letterSpacing: "-0.02em"
};
function Roster({
  rows
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, rows.map(([n]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: nameStyle
  }, n))), /*#__PURE__*/React.createElement("div", null, rows.map(([n, r], i) => /*#__PURE__*/React.createElement("div", {
    key: n + i,
    style: nameStyle
  }, r))));
}
function RediAbout({
  onNav,
  current = "our mission"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1920,
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement(RediNav, {
    current: current,
    onNav: onNav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 348,
      ...headStyle,
      fontWeight: 700,
      fontSize: 95,
      lineHeight: 1
    }
  }, "Meet Redi"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 751,
      marginTop: 22,
      fontFamily: "var(--font-display)",
      fontWeight: 450,
      fontSize: 30,
      lineHeight: 1,
      letterSpacing: "-0.02em"
    }
  }, "Working side by side\u2014healthcare professionals, scientists, and advocates\u2014to make early detection save more lives.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "180px 40px 0"
    }
  }, /*#__PURE__*/React.createElement(SectionRule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "930px 465px 1fr",
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: headStyle
  }, "Our Advisory Board"), /*#__PURE__*/React.createElement(Roster, {
    rows: BOARD_A
  }), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 16,
      paddingBottom: 190
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 441,
      height: 441,
      background: "url(../../assets/images/advisor-portrait.png) center / cover no-repeat"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 430,
      marginTop: 23,
      fontFamily: "var(--font-grotesk)",
      fontWeight: 450,
      fontSize: 24,
      lineHeight: 1.15,
      letterSpacing: "0.01em"
    }
  }, "Short Bio - With a background in education and tech innovation, they\u2019re bridging the gap between learning and real-world success.")), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement(Roster, {
    rows: BOARD_B
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "156px 40px 0"
    }
  }, /*#__PURE__*/React.createElement(SectionRule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "930px 465px 1fr",
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: headStyle
  }, "Our Redi Team"), /*#__PURE__*/React.createElement(Roster, {
    rows: TEAM
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "930px 1fr",
      paddingTop: 106
    }
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 912,
      height: 512,
      background: "url(../../assets/images/team-photo.png) center / cover no-repeat"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 910,
      marginTop: 39
    }
  }, /*#__PURE__*/React.createElement(Button, null, "contact us"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 100
    }
  }, /*#__PURE__*/React.createElement(RediFooter, null)));
}
Object.assign(window, {
  RediAbout
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RediAbout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RediHome.jsx
try { (() => {
/* global React */
const {
  Logo,
  NavLink,
  Button,
  TextLink,
  BigTextCTA,
  ScrollableList,
  WhatWeDo,
  SectionRule
} = window.REDIDesignSystem_ac846f;
const NAV = [{
  label: "info",
  x: 0
}, {
  label: "our mission",
  x: 71
}, {
  label: "press",
  x: 219
}, {
  label: "get involved",
  x: 313
}];
function Nav({
  current,
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 27,
      width: 1841,
      height: 105.199
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.label,
    style: {
      position: "absolute",
      left: n.x,
      top: 1
    }
  }, /*#__PURE__*/React.createElement(NavLink, {
    current: n.label === current,
    onClick: e => {
      e.preventDefault();
      onNav(n.label);
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 814,
      top: 0
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "red",
    width: 215.09
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      top: 1
    }
  }, /*#__PURE__*/React.createElement(NavLink, {
    current: current === "contact",
    onClick: e => {
      e.preventDefault();
      onNav("contact");
    }
  }, "contact")));
}
function Footer() {
  const cols = [["Contact Us", "Our Mission"], ["What We Do", "Bruce’s Story", "Press"], ["Get Involved"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1920,
      height: 532,
      background: "var(--surface-footer)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 41,
      fontFamily: "var(--font-grotesk-bold)",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1
    }
  }, "Ratner Early Detection Initiative"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      bottom: 40,
      display: "flex",
      gap: 96,
      fontFamily: "var(--font-grotesk)",
      fontWeight: 450,
      fontSize: 14,
      lineHeight: 1.6,
      letterSpacing: "0.01em",
      textTransform: "capitalize"
    }
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid"
    }
  }, c.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: "var(--black)",
      textDecoration: "none"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 964,
      top: 41.445,
      width: 925
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "inherit",
    width: 925,
    style: {
      color: "var(--neutral-02)"
    }
  })));
}
function Hero() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1920,
      height: 1107,
      background: "var(--white)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 43,
      top: 468,
      width: 1217,
      height: 452
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 495,
      top: 281,
      width: 626,
      height: 15,
      borderRadius: 2,
      background: "var(--redi-red-underline)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 376,
      width: 659,
      height: 15,
      borderRadius: 2,
      background: "var(--redi-red-underline)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1217,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 95,
      lineHeight: 1,
      letterSpacing: "-0.02em"
    }
  }, "\u201CI knew I could not cure cancer, so I devoted the rest of my life to early detection and prevention.\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 443,
      width: 88,
      height: 3,
      background: "var(--black)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 84,
      top: 434,
      width: 140,
      textAlign: "right",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 19,
      lineHeight: 0.97,
      letterSpacing: "-0.01em"
    }
  }, "Bruce Ratner")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 1003,
      width: 919
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Our Mission")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 961,
      top: 1003,
      width: 919
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Get Involved")));
}
function Welcome() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1920,
      height: 900,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 0,
      width: 1840,
      height: 900,
      borderRadius: 5,
      background: "linear-gradient(var(--redi-red),var(--redi-red)), url(../../assets/images/bruce-ratner-portrait.jpg) 100% 1.464% / 130.15% 151.065% no-repeat"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 413,
      top: 266,
      width: 1131,
      textAlign: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 95,
      lineHeight: 0.95,
      letterSpacing: "-0.02em",
      color: "var(--text-on-red)"
    }
  }, "Welcome to Ratner Early Detection Initiative."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 664,
      top: 474,
      width: 629,
      textAlign: "center",
      fontFamily: "var(--font-grotesk)",
      fontWeight: 450,
      fontSize: 24,
      lineHeight: 1.15,
      letterSpacing: "0.01em",
      color: "var(--text-on-red)"
    }
  }, "A think tank and foundation devoted to saving lives and ensuring that every cancer victim gets the best cancer care."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 796,
      top: 846,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 19,
      lineHeight: 0.97,
      letterSpacing: "-0.01em",
      color: "var(--text-on-red)",
      textTransform: "capitalize"
    }
  }, "Scroll down to  read our misson"));
}
function Mission() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1920,
      height: 679,
      background: "var(--white)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 48,
      width: 1840
    }
  }, /*#__PURE__*/React.createElement(SectionRule, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 81,
      fontFamily: "var(--font-grotesk-bold)",
      fontWeight: 700,
      fontSize: 41,
      lineHeight: 0.96
    }
  }, "Our Mission"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 970,
      top: 81,
      width: 907,
      fontFamily: "var(--font-display)",
      fontWeight: 450,
      fontSize: 44,
      lineHeight: 1.1,
      letterSpacing: "-0.02em"
    }
  }, "Ratner Early Detection Initiative (REDI) is reshaping outdated approaches to early detection to revolutionize cancer prevention and improve outcomes."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 970,
      top: 447,
      width: 907,
      fontFamily: "var(--font-grotesk)",
      fontWeight: 450,
      fontSize: 24,
      lineHeight: 1.15,
      letterSpacing: "0.01em",
      whiteSpace: "pre-line"
    }
  }, "By expanding access to screening, advancing technologies, and challenging how systems operate, REDI works to ensure cancer is caught early — when it’s most curable.\nWe are committed to making early detection a standard of cancer care."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 970,
      top: 551,
      width: 910
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fill: "mist"
  }, "Press")));
}
function BrucesStory() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1920,
      height: 1400,
      background: "var(--black)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 48,
      width: 1840,
      height: 15,
      borderRadius: 2,
      background: "var(--neutral-02)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 99,
      fontFamily: "var(--font-grotesk-bold)",
      fontWeight: 700,
      fontSize: 41,
      lineHeight: 0.96,
      color: "var(--neutral-02)"
    }
  }, "Bruce\u2019s Story"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 970,
      top: 99,
      width: 907
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 95,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      color: "var(--neutral-02)"
    }
  }, "\u201CThe system must change: we need to spend more money, do more research, and make people aware of the benefits of early detection. Early detection will save the people we love.\u201D", /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 776,
      width: 895,
      height: 15,
      borderRadius: 2,
      background: "var(--redi-red-underline)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 871,
      width: 640,
      height: 15,
      borderRadius: 2,
      background: "var(--redi-red-underline)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 66,
      fontFamily: "var(--font-grotesk)",
      fontWeight: 450,
      fontSize: 24,
      lineHeight: 1.15,
      letterSpacing: "0.01em",
      color: "var(--neutral-02)"
    }
  }, "Like so many of us, Bruce Ratner saw loved ones \u2014 including mother, brother and closest friends \u2014 suffer and die from cancer. He realized catching cancer early is the closest thing we have to a cure. He founded REDI to ask the hard questions, challenge the status quo, and fight for equity in cancer care."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      width: 909
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Read the Book"))));
}
function GetInvolved() {
  const [i, setI] = React.useState(2);
  const items = ["Support the Work", "Partner with REDI", "Get Screened", "Read More", "Contact Us"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1920,
      height: 778,
      background: "var(--white)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 640,
      top: 351,
      width: 290,
      textAlign: "right",
      fontFamily: "var(--font-display)",
      fontWeight: 450,
      fontSize: 44,
      lineHeight: 1.1,
      letterSpacing: "-0.02em"
    }
  }, "Get Involved"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 970,
      top: 232
    }
  }, /*#__PURE__*/React.createElement(ScrollableList, {
    items: items,
    active: i,
    onSelect: setI
  })));
}
function RediHome({
  onNav,
  current = "info"
}) {
  const [step, setStep] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1920,
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Nav, {
    current: current,
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Welcome, null), /*#__PURE__*/React.createElement(Mission, null), /*#__PURE__*/React.createElement(WhatWeDo, {
    step: step,
    onStep: setStep
  }), /*#__PURE__*/React.createElement(BrucesStory, null), /*#__PURE__*/React.createElement(GetInvolved, null), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  RediHome,
  RediNav: Nav,
  RediFooter: Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RediHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RediMobile.jsx
try { (() => {
/* global React */
const {
  Logo,
  Header,
  MobileMenu,
  WhatWeDo,
  Button,
  TextLink
} = window.REDIDesignSystem_ac846f;

/** 375-wide mobile home, with the full-screen menu overlaid. */
function RediMobile() {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 375,
      minHeight: 688,
      background: "var(--white)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    breakpoint: "mobile",
    onMenu: () => setOpen(true)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 90,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 0.94,
      letterSpacing: "-0.02em"
    }
  }, "\u201CI knew I could not cure cancer, so I devoted the rest of my life to early detection and prevention.\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 3,
      background: "var(--black)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 0.97,
      letterSpacing: "-0.01em"
    }
  }, "Bruce Ratner")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "177px 176px",
      gap: 2,
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "compact"
  }, "Our Mission"), /*#__PURE__*/React.createElement(Button, {
    size: "compact"
  }, "Get involved"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      height: 420,
      background: "linear-gradient(var(--redi-red),var(--redi-red)), url(../../assets/images/bruce-ratner-portrait.jpg) 86.688% 8.757% / 128.572% 210.249% no-repeat",
      display: "grid",
      alignContent: "center",
      justifyItems: "center",
      padding: "0 18px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 0.94,
      letterSpacing: "-0.02em",
      color: "var(--text-on-red)"
    }
  }, "Welcome to Ratner Early Detection Initiative."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontFamily: "var(--font-grotesk)",
      fontWeight: 450,
      fontSize: 16,
      lineHeight: 1.1,
      letterSpacing: "0.01em",
      color: "var(--text-on-red)"
    }
  }, "A think tank and foundation devoted to saving lives and ensuring that every cancer victim gets the best cancer care.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "36px 10px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 7,
      borderRadius: 2,
      background: "var(--black)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 18,
      fontFamily: "var(--font-grotesk-bold)",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 0.96
    }
  }, "Our Mission"), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 450,
      fontSize: 30,
      lineHeight: 1,
      letterSpacing: "-0.02em"
    }
  }, "Ratner Early Detection Initiative (REDI) is reshaping outdated approaches to early detection to revolutionize cancer prevention and improve outcomes."), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 18,
      fontFamily: "var(--font-grotesk)",
      fontWeight: 450,
      fontSize: 16,
      lineHeight: 1.1,
      letterSpacing: "0.01em"
    }
  }, "By expanding access to screening, advancing technologies, and challenging how systems operate, REDI works to ensure cancer is caught early \u2014 when it\u2019s most curable."), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "compact",
    fill: "mist"
  }, "Press"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(WhatWeDo, {
    breakpoint: "mobile",
    step: 1
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--black)",
      padding: "34px 10px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 7,
      borderRadius: 2,
      background: "var(--neutral-02)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 18,
      fontFamily: "var(--font-grotesk-bold)",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 0.96,
      color: "var(--neutral-02)"
    }
  }, "Bruce\u2019s Story"), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 16,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 0.94,
      letterSpacing: "-0.02em",
      color: "var(--neutral-02)"
    }
  }, "\u201CEarly detection will save the people we love.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 20,
      fontFamily: "var(--font-grotesk)",
      fontWeight: 450,
      fontSize: 16,
      lineHeight: 1.1,
      letterSpacing: "0.01em",
      color: "var(--neutral-02)"
    }
  }, "Like so many of us, Bruce Ratner saw loved ones suffer and die from cancer. He founded REDI to ask the hard questions and fight for equity in cancer care."), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "compact"
  }, "Read the Book"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-footer)",
      padding: "34px 10px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      fontFamily: "var(--font-grotesk)",
      fontWeight: 450,
      fontSize: 14,
      lineHeight: 0.97,
      letterSpacing: "0.01em",
      textTransform: "capitalize"
    }
  }, ["Our Mission", "Contact Us", "What We do", "Bruce’s Story", "Press", "get involved"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: "var(--black)",
      textDecoration: "none"
    }
  }, l)), /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: "none",
      marginTop: 6
    }
  }, "Ratner Early Detection Initiative")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "inherit",
    width: 355,
    style: {
      color: "var(--neutral-02)"
    }
  }))), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(MobileMenu, {
    current: "get involved",
    onClose: () => setOpen(false)
  })) : null);
}
Object.assign(window, {
  RediMobile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RediMobile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RediPress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, RediNav, RediFooter */
const {
  MediaCard,
  TextLink,
  SectionRule
} = window.REDIDesignSystem_ac846f;
const VIDEOS = [{
  title: "Bruce Ratner Honored at United Hospital Fund Gala",
  image: "../../assets/images/press-thumb-01.png"
}, {
  title: "Bruce Ratner Speaks at Precision Medicine Leaders Summit",
  image: "../../assets/images/press-thumb-02.png"
}, {
  title: "Bruce Ratner on CNBC Squawk Box",
  image: "../../assets/images/press-thumb-03.png"
}, {
  title: "Bruce Ratner speaks at the ACS Future of Cancer Care Policy Forum",
  image: "../../assets/images/press-thumb-04.png"
}, {
  title: "Bruce Ratner and Paul Goldberger in Conversation at New York Stem Cell Foundation",
  image: "../../assets/images/press-thumb-05.png"
}, {
  title: "Bruce Ratner on Squawk Box with Andrew Ross Sorkin",
  image: "../../assets/images/press-thumb-06.png"
}];
const ARTICLES = [{
  title: "Cancer hospitals' cancer prevention plans — and what's foiling them",
  image: "../../assets/images/press-thumb-07.png"
}, {
  title: "America first declared war on cancer half a century ago. Today’s regulatory hurdles won’t help us win",
  image: "../../assets/images/press-thumb-08.png"
}, {
  title: "Bruce Ratner and Paul Goldberger in Conversation at New York Stem Cell Foundation",
  image: "../../assets/images/press-thumb-01.png"
}, {
  title: "Cancer hospitals' cancer prevention plans — and what's foiling them",
  image: "../../assets/images/press-thumb-02.png"
}, {
  title: "America first declared war on cancer half a century ago. Today’s regulatory hurdles won’t help us win",
  image: "../../assets/images/press-thumb-03.png"
}, {
  title: "Bruce Ratner and Paul Goldberger in Conversation at New York Stem Cell Foundation",
  image: "../../assets/images/press-thumb-04.png"
}];
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 445px)",
  columnGap: 253,
  rowGap: 96,
  paddingTop: 64
};
function RediPress({
  onNav,
  current = "press"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1920,
      background: "var(--white)",
      paddingTop: 164
    }
  }, /*#__PURE__*/React.createElement(RediNav, {
    current: current,
    onNav: onNav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "148px 40px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-grotesk-bold)",
      fontWeight: 700,
      fontSize: 41,
      lineHeight: 0.96
    }
  }, "Videos"), /*#__PURE__*/React.createElement("div", {
    style: grid
  }, VIDEOS.map((v, i) => /*#__PURE__*/React.createElement(MediaCard, _extends({
    key: i,
    kind: "video",
    showLink: false
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center",
      paddingTop: 74
    }
  }, /*#__PURE__*/React.createElement(TextLink, null, "View More"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "120px 40px 140px"
    }
  }, /*#__PURE__*/React.createElement(SectionRule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 33,
      fontFamily: "var(--font-grotesk-bold)",
      fontWeight: 700,
      fontSize: 41,
      lineHeight: 0.96
    }
  }, "Articles"), /*#__PURE__*/React.createElement("div", {
    style: grid
  }, ARTICLES.map((a, i) => /*#__PURE__*/React.createElement(MediaCard, _extends({
    key: i
  }, a))))), /*#__PURE__*/React.createElement(RediFooter, null));
}
Object.assign(window, {
  RediPress
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RediPress.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BigTextCTA = __ds_scope.BigTextCTA;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.PlayButton = __ds_scope.PlayButton;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.BrandLockup = __ds_scope.BrandLockup;

__ds_ns.LoadingMark = __ds_scope.LoadingMark;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ScrollableList = __ds_scope.ScrollableList;

__ds_ns.GetInvolvedButtonHoverState = __ds_scope.GetInvolvedButtonHoverState;

__ds_ns.GetScreened = __ds_scope.GetScreened;

__ds_ns.OurMissonButtonHoverState = __ds_scope.OurMissonButtonHoverState;

__ds_ns.UnderlineAnimation = __ds_scope.UnderlineAnimation;

__ds_ns.MediaCard = __ds_scope.MediaCard;

__ds_ns.Underline = __ds_scope.Underline;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.MobileMenu = __ds_scope.MobileMenu;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.ProgressTrack = __ds_scope.ProgressTrack;

__ds_ns.SectionRule = __ds_scope.SectionRule;

__ds_ns.WHAT_WE_DO_STEPS = __ds_scope.WHAT_WE_DO_STEPS;

__ds_ns.WhatWeDo = __ds_scope.WhatWeDo;

})();
