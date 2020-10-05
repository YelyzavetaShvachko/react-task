"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PnfBtn = exports.PnfTitle = exports.PnfContent = exports.PnfWrap = exports.MovieDetailsImg = exports.MovieDurationAndYear = exports.MovieDetailsRaiting = exports.MovieDetailsTitleWrap = exports.MovieDetailsTitle = exports.MovieDetailsContent = exports.MovieDetailsWrapper = exports.MovieDetailsBackground = exports.MovieDetailsBlock = exports.MovieModalBtn = exports.MovieModalClose = exports.MovieModal = exports.MovieIcon = exports.CancelBtn = exports.SubmitBtn = exports.BtnWrapper = exports.FormInput = exports.FormItem = exports.ModalForm = exports.ModalTitle = exports.ModalClose = exports.ModalWindow = exports.ModalBackground = exports.OoopsText = exports.SortingValue = exports.SortingTitle = exports.SortingWrapper = exports.MoviesAmount = exports.SearchResults = exports.MoviesWrapper = exports.Navigation = exports.MoviesSection = exports.Genre = exports.DescriptionWrapper = exports.Year = exports.Image = exports.MovieCard = exports.Background = exports.Footer = exports.SearchBtn = exports.SearchInput = exports.SearchForm = exports.Title = exports.Category = exports.CategoriesWrapper = exports.AddMovie = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _background = _interopRequireDefault(require("../assets/img/background.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject50() {
  var data = _taggedTemplateLiteral(["\n    color: #f65261;\n    font-size: 24px;\n    border: 1px solid #f65261;\n    background: transparent;\n    margin: 0 auto;\n    display: block;\n    padding: 10px 25px;\n    margin-top: 40px;\n"]);

  _templateObject50 = function _templateObject50() {
    return data;
  };

  return data;
}

function _templateObject49() {
  var data = _taggedTemplateLiteral(["\n    color: #ffffff;\n    text-align: center;\n    font-size: 48px;\n    letter-spacing: 0.2rem;\n    margin-bottom: 20px;\n"]);

  _templateObject49 = function _templateObject49() {
    return data;
  };

  return data;
}

function _templateObject48() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    top: 20%;\n"]);

  _templateObject48 = function _templateObject48() {
    return data;
  };

  return data;
}

function _templateObject47() {
  var data = _taggedTemplateLiteral(["\n    height: 100vh;\n    background-color: #121212;\n"]);

  _templateObject47 = function _templateObject47() {
    return data;
  };

  return data;
}

function _templateObject46() {
  var data = _taggedTemplateLiteral(["\n    height: 340px;\n"]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = _taggedTemplateLiteral(["\n    color: #f65261;\n    width: 170px;\n    display: flex;\n    justify-content: space-between;\n    font-size: 26px;\n    margin: 15px 0;\n"]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = _taggedTemplateLiteral(["\n    font-size: 28px;\n    color: #018401;\n    border: 1px solid #ffffff;\n    border-radius: 50%;\n    padding: 2px 10px;\n    margin-left: 30px;\n"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    font-size: 48px;\n    margin-bottom: 10px;\n"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = _taggedTemplateLiteral(["\n    font-size: 48px;\n    line-height: 1;\n"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["\n    padding: 20px 0 0 40px;\n    color: #ffffff;\n    font-size: 16px;\n    height: 340px;\n    overflow: scroll;\n"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["\n    padding: 40px 0;\n    display: flex;\n"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    width: 100vw;\n    height: 510px;\n    background-image: url(", ");\n    z-index: -1;\n    background-size: cover;\n    &:before {\n    content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background: #000000;\n        opacity: 0.85;\n  }\n"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["\n    padding: 30px 0;\n"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: 5px 0 5px 35px;\n    color: #ffffff;\n    &:hover {\n        background: #f65261;\n    }\n"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 25px;\n    top: 20px;\n    width: 20px;\n    height: 20px;\n    z-index: 9;\n    &:after, &:before {\n        position: absolute;\n        left: 15px;\n        content: ' ';\n        height: 15px;\n        width: 2px;\n        background-color: #ffffff;\n    }\n    &:before {\n        transform: rotate(45deg);\n    }\n    &:after {\n        transform: rotate(-45deg);\n    }\n"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\npadding-top: 30px;\n    width: 200px;\n    height: 120px;\n    background: #232323;\n    border-radius: 3px;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    z-index: 9;\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n    width: 40px;\n    height: 40px;\n    background: #232323;\n    border-radius: 50%;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n    background: transparent;\n    color: #f65261;\n    border: 1px solid #f65261;\n    padding: 10px 30px;\n    margin-right: 10px;\n    border-radius: 3px;\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px 30px;\n    border-radius: 3px;\n    color: #ffffff;\n    background: #f65261;\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n    margin-top: 60px;\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    width: 100%;\n    background: #424242;\n    padding: 10px;\n    margin-top: 5px;\n    color: #ffffff;\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    color: #f65261;\n    width: 100%;\n    font-size: 16px;\n    margin: 8px 0;\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: wrap;\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n    font-size: 32px;\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 32px;\n    top: 32px;\n    width: 32px;\n    height: 32px;\n    &:after, &:before {\n        position: absolute;\n        left: 15px;\n        content: ' ';\n        height: 33px;\n        width: 2px;\n        background-color: #ffffff;\n    }\n    &:before {\n        transform: rotate(45deg);\n    }\n    &:after {\n        transform: rotate(-45deg);\n    }\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n    position: fixed;\n    color: #ffffff;\n    background: #232323;\n    width: 65%;\n    height: auto;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    z-index: 9;\n    padding: 50px 60px;\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.6);\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n    width: 90%;\n    margin: 0 auto;\n    padding: 70px 20px;\n    background: #1d1d1d;\n    color: #e40909;\n    margin-bottom: 8px;\n    text-align: center;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n    background: #232323;\n    border: none;\n    color: #ffffff;\n    appearance: none;\n    padding-right: 8px;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    color: #505050; \n    margin-right: 20px;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px;\n    color: #ffffff;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    &:after {\n        content: 'A';\n        color: #f65261;\n        right: 0;\n        position: absolute;\n        content: '';\n        width: 0px;\n        height: 0px;\n        border-style: solid;\n        border-width: 4px 6px 4px 0;\n        border-color: transparent #f65261 transparent transparent;  \n        display: inline-block;\n        vertical-align: middle;\n        transform: rotate(270deg);\n}\n"], ["\n    padding: 10px;\n    color: #ffffff;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    &:after {\n        content: '\\A';\n        color: #f65261;\n        right: 0;\n        position: absolute;\n        content: '';\n        width: 0px;\n        height: 0px;\n        border-style: solid;\n        border-width: 4px 6px 4px 0;\n        border-color: transparent #f65261 transparent transparent;  \n        display: inline-block;\n        vertical-align: middle;\n        transform: rotate(270deg);\n}\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n    color: #ffffff;\n    font-family: 'Arial', sans-serif;\n    font-weight: 600;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    color: #ffffff;\n    padding: 22px 0;\n    font-size: 16px;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: wrap; \n    justify-content: space-between; \n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 2px solid #4c4c4c;\n    position:relative;\n    display: flex;\n    justify-content: space-between;\n\n    &:after {\n        content: \"\";\n        display: block;\n        height: 1px;\n        width: 100%;\n        background: #000000;\n        position: absolute;\n        bottom: -4px;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    background-color: #232323;  \n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    font-size: 14px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    font-size: 16px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid #555555;\n    padding: 0 10px;\n    border-radius: 5px;\n    position: absolute;\n    top: 15px;\n    right: 0;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 320px;\n    margin-bottom: 10px;\n    @media (min-width: 768px) {\n        height: 380px;\n  }\n    @media (min-width: 1200px) {\n        height: 520px;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    background-color: #232323;\n    width: 30%;\n    margin-bottom: 50px;\n    color: #a2a2a2;\n    position: relative;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    width: 100vw;\n    height: 450px;\n    background-image: url(", ");\n    z-index: -1;\n    background-size: cover;\n    &:before {\n    content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6787902661064426) 0%, rgba(0,0,0,0.7) 100%);\n        opacity: .9; \n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    background-color: #424242;\n    padding: 16px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    width: 25%;\n    padding: 15px 0;\n    font-size: 18px;\n    background-color: #f65261;\n    color: #ffffff;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width: 73%;\n    background-color: #1d1c1c;\n    color: #ffffff;\n    padding: 16px 10px;\n    opacity: 0.9;\n    font-size: 18px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;    \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    color: #ffffff;\n    margin-bottom: 30px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px;\n    color: #ffffff;\n    font-size: 16px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 0;\n    width: 182px;\n    padding: 10px 0;\n    color: #f65261;\n    background-color: rgba(76, 74, 74, 0.7);\n    font-size: 18px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AddMovie = _styledComponents["default"].button(_templateObject());

exports.AddMovie = AddMovie;

var CategoriesWrapper = _styledComponents["default"].div(_templateObject2());

exports.CategoriesWrapper = CategoriesWrapper;

var Category = _styledComponents["default"].div(_templateObject3());

exports.Category = Category;

var Title = _styledComponents["default"].h1(_templateObject4());

exports.Title = Title;

var SearchForm = _styledComponents["default"].div(_templateObject5());

exports.SearchForm = SearchForm;

var SearchInput = _styledComponents["default"].input(_templateObject6());

exports.SearchInput = SearchInput;

var SearchBtn = _styledComponents["default"].button(_templateObject7());

exports.SearchBtn = SearchBtn;

var Footer = _styledComponents["default"].footer(_templateObject8());

exports.Footer = Footer;

var Background = _styledComponents["default"].div(_templateObject9(), _background["default"]);

exports.Background = Background;

var MovieCard = _styledComponents["default"].div(_templateObject10());

exports.MovieCard = MovieCard;

var Image = _styledComponents["default"].img(_templateObject11());

exports.Image = Image;

var Year = _styledComponents["default"].span(_templateObject12());

exports.Year = Year;

var DescriptionWrapper = _styledComponents["default"].div(_templateObject13());

exports.DescriptionWrapper = DescriptionWrapper;

var Genre = _styledComponents["default"].p(_templateObject14());

exports.Genre = Genre;

var MoviesSection = _styledComponents["default"].section(_templateObject15());

exports.MoviesSection = MoviesSection;

var Navigation = _styledComponents["default"].nav(_templateObject16());

exports.Navigation = Navigation;

var MoviesWrapper = _styledComponents["default"].div(_templateObject17());

exports.MoviesWrapper = MoviesWrapper;

var SearchResults = _styledComponents["default"].h3(_templateObject18());

exports.SearchResults = SearchResults;

var MoviesAmount = _styledComponents["default"].span(_templateObject19());

exports.MoviesAmount = MoviesAmount;

var SortingWrapper = _styledComponents["default"].div(_templateObject20());

exports.SortingWrapper = SortingWrapper;

var SortingTitle = _styledComponents["default"].span(_templateObject21());

exports.SortingTitle = SortingTitle;

var SortingValue = _styledComponents["default"].select(_templateObject22());

exports.SortingValue = SortingValue;

var OoopsText = _styledComponents["default"].h2(_templateObject23()); //modals with form


exports.OoopsText = OoopsText;

var ModalBackground = _styledComponents["default"].div(_templateObject24());

exports.ModalBackground = ModalBackground;

var ModalWindow = _styledComponents["default"].div(_templateObject25());

exports.ModalWindow = ModalWindow;

var ModalClose = _styledComponents["default"].div(_templateObject26());

exports.ModalClose = ModalClose;

var ModalTitle = _styledComponents["default"].h3(_templateObject27());

exports.ModalTitle = ModalTitle;

var ModalForm = _styledComponents["default"].form(_templateObject28());

exports.ModalForm = ModalForm;

var FormItem = _styledComponents["default"].label(_templateObject29());

exports.FormItem = FormItem;

var FormInput = _styledComponents["default"].input(_templateObject30());

exports.FormInput = FormInput;

var BtnWrapper = _styledComponents["default"].div(_templateObject31());

exports.BtnWrapper = BtnWrapper;

var SubmitBtn = _styledComponents["default"].button(_templateObject32());

exports.SubmitBtn = SubmitBtn;

var CancelBtn = _styledComponents["default"].button(_templateObject33()); // movie modal


exports.CancelBtn = CancelBtn;

var MovieIcon = _styledComponents["default"].div(_templateObject34());

exports.MovieIcon = MovieIcon;

var MovieModal = _styledComponents["default"].div(_templateObject35());

exports.MovieModal = MovieModal;

var MovieModalClose = _styledComponents["default"].div(_templateObject36());

exports.MovieModalClose = MovieModalClose;

var MovieModalBtn = _styledComponents["default"].div(_templateObject37()); // movie details


exports.MovieModalBtn = MovieModalBtn;

var MovieDetailsBlock = _styledComponents["default"].div(_templateObject38());

exports.MovieDetailsBlock = MovieDetailsBlock;

var MovieDetailsBackground = _styledComponents["default"].div(_templateObject39(), _background["default"]);

exports.MovieDetailsBackground = MovieDetailsBackground;

var MovieDetailsWrapper = _styledComponents["default"].div(_templateObject40());

exports.MovieDetailsWrapper = MovieDetailsWrapper;

var MovieDetailsContent = _styledComponents["default"].div(_templateObject41());

exports.MovieDetailsContent = MovieDetailsContent;

var MovieDetailsTitle = _styledComponents["default"].h3(_templateObject42());

exports.MovieDetailsTitle = MovieDetailsTitle;

var MovieDetailsTitleWrap = _styledComponents["default"].div(_templateObject43());

exports.MovieDetailsTitleWrap = MovieDetailsTitleWrap;

var MovieDetailsRaiting = _styledComponents["default"].div(_templateObject44());

exports.MovieDetailsRaiting = MovieDetailsRaiting;

var MovieDurationAndYear = _styledComponents["default"].div(_templateObject45());

exports.MovieDurationAndYear = MovieDurationAndYear;

var MovieDetailsImg = _styledComponents["default"].img(_templateObject46()); // 404 page not found


exports.MovieDetailsImg = MovieDetailsImg;

var PnfWrap = _styledComponents["default"].div(_templateObject47());

exports.PnfWrap = PnfWrap;

var PnfContent = _styledComponents["default"].div(_templateObject48());

exports.PnfContent = PnfContent;

var PnfTitle = _styledComponents["default"].h1(_templateObject49());

exports.PnfTitle = PnfTitle;

var PnfBtn = _styledComponents["default"].button(_templateObject50());

exports.PnfBtn = PnfBtn;