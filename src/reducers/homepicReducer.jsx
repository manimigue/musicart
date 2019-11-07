import Concert from '../img/concert2019_logo.png';
import About from '../img/wide_logo01.png';
import P1_1 from "../img/program_png_300dpi/musicart_program_1911031.png"
import P1_2 from "../img/program_png_300dpi/musicart_program_1911032.png"
import P1_3 from "../img/program_png_300dpi/musicart_program_1911033.png"
import P1_4 from "../img/program_png_300dpi/musicart_program_1911034.png"
import P1_5 from "../img/program_png_300dpi/musicart_program_1911035.png"
import P1_6 from "../img/program_png_300dpi/musicart_program_1911036.png"
import P1_7 from "../img/program_png_300dpi/musicart_program_1911037.png"
import P1_8 from "../img/program_png_300dpi/musicart_program_1911038.png"
import P1_9 from "../img/program_png_300dpi/musicart_program_1911039.png"
import P1_10 from "../img/program_png_300dpi/musicart_program_19110310.png"
import P1_11 from "../img/program_png_300dpi/musicart_program_19110311.png"
import P1_12 from "../img/program_png_300dpi/musicart_program_19110312.png"
import P1_13 from "../img/program_png_300dpi/musicart_program_19110313.png"
import P1_14 from "../img/program_png_300dpi/musicart_program_19110314.png"
import P1_15 from "../img/program_png_300dpi/musicart_program_19110315.png"
import P1_16 from "../img/program_png_300dpi/musicart_program_19110316.png"

const initialState = {
  pictures: {
    home : [
      {
        img : Concert,
        link : {
          text : 'concert logo',
          type : 'Route',
          url : '/concert/light_and_magic'
        }
      },
      {
        img : About,
        link : {
          text : 'About Orchestra Mµsicart',
          type : 'Route',
          url : '/about'
        }
      }
    ],
    program_2019 : [
      {
        img : P1_1,
        link : {
          text : "Program(191103) page1",
          type : "None",
          url : ""
        }
      },
      {
        img : P1_2,
        link : {
          text : "Program(191103) page2",
          type : "None",
          url : ""
        }
      },
      {
        img : P1_3,
        link : {
          text : "Program(191103) page3",
          type : "None",
          url : ""
        }
      },
      {
        img : P1_4,
        link : {
          text : "Program(191103) page4",
          type : "None",
          url : ""
        }
      },
      {
        img : P1_5,
        link : {
          text : "Program(191103) page5",
          type : "None",
          url : ""
        }
      },
      {
        img : P1_6,
        link : {
          text : "Program(191103) page6",
          type : "None",
          url : ""
        }
      },
      {
        img : P1_7,
        link : {
          text : "Program(191103) page7",
          type : "None",
          url : ""
        }
      },
      {
        img : P1_8,
        link : {
          text : "Program(191103) page8",
          type : "None",
          url : ""
        }
      },
      {
        img : P1_9,
        link : {
          text : "Program(191103) page9",
          type : "None",
          url : ""
        }
      },
      {
        img : P1_10,
        link : {
          text : "Program(191103) page10",
          type : "None",
          url : ""
        }
      },
      {
        img : P1_11,
        link : {
          text : "Program(191103) page11",
          type : "None",
          url : ""
        }
      },
      {
        img : P1_12,
        link : {
          text : "Program(191103) page12",
          type : "None",
          url : ""
        }
      },
      {
        img : P1_13,
        link : {
          text : "Program(191103) page13",
          type : "None",
          url : ""
        }
      },
      {
        img : P1_14,
        link : {
          text : "Program(191103) page14",
          type : "None",
          url : ""
        }
      },
      {
        img : P1_15,
        link : {
          text : "Program(191103) page15",
          type : "None",
          url : ""
        }
      },
      {
        img : P1_16,
        link : {
          text : "Program(191103) page16",
          type : "None",
          url : ""
        }
      },
    ]
  }
};

function homepicReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default homepicReducer;
