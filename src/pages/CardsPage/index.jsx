import React from "react";

import { Button, CheckBox, Img, Line, List, Text } from "components";

const CardsPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[15px] items-center justify-start mx-auto py-[9px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1859px] mx-auto md:px-5 w-full">
            <Img
              className="h-[30px] md:mt-0 mt-1"
              src="images/img_settings.svg"
              alt="settings"
            />
            <Line className="bg-black-900_63 h-8 md:h-px ml-5 md:ml-[0] md:mt-0 my-1 rounded-[1px] md:w-full w-px" />
            <CheckBox
              className="leading-[normal] ml-5 md:ml-[0] md:mt-0 mt-2 text-base text-black-900 text-left"
              inputClassName="mr-[5px]"
              name="boards"
              id="boards"
              label="Boards"
            ></CheckBox>
            <Line className="bg-black-900_63 h-8 md:h-px md:ml-[0] ml-[19px] md:mt-0 my-1 rounded-[1px] md:w-full w-px" />
            <div className="bg-gray-100 flex md:flex-1 flex-col items-end justify-start ml-5 md:ml-[0] md:mt-0 my-[5px] p-[7px] rounded-[15px] w-[28%] md:w-full">
              <Img
                className="h-[15px] mr-[7px] w-[15px]"
                src="images/img_rewind.svg"
                alt="rewind"
              />
            </div>
            <Img
              className="h-5 md:ml-[0] ml-[916px] md:mt-0 mt-2.5"
              src="images/img_icons.svg"
              alt="icons"
            />
            <div className="flex flex-col h-10 items-center justify-start md:ml-[0] ml-[30px] w-10">
              <Img
                className="h-10 md:h-auto rounded-[50%] w-10"
                src="images/img_oval.png"
                alt="oval"
              />
            </div>
          </div>
          <Img
            className="h-px mt-[9px]"
            src="images/img_line.svg"
            alt="line_Two"
          />
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1864px] mt-[30px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-row items-center justify-between w-[12%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                  size="txtPoppinsMedium26"
                >
                  Brackets
                </Text>
              </div>
              <Img
                className="h-[19px] w-[19px]"
                src="images/img_favorite.svg"
                alt="favorite"
              />
            </div>
            <div className="flex md:flex-1 flex-row items-start justify-center ml-2.5 md:ml-[0] md:mt-0 mt-[3px] w-[5%] md:w-full">
              <Line className="bg-black-900_63 h-[35px] rounded-[1px] w-px" />
              <Img
                className="h-[19px] ml-2.5 mt-[7px] w-[19px]"
                src="images/img_file.svg"
                alt="file"
              />
              <Text
                className="ml-1 mt-1 text-black-900_63 text-lg"
                size="txtPoppinsRegular18"
              >
                Public
              </Text>
            </div>
            <Img
              className="h-[35px] md:ml-[0] ml-[11px] md:mt-0 mt-[3px]"
              src="images/img_car.svg"
              alt="car"
            />
            <div className="h-10 md:ml-[0] ml-[1206px] relative w-[8%] md:w-full">
              <div className="absolute h-10 inset-y-[0] left-[0] my-auto w-[86%]">
                <div className="absolute h-10 inset-y-[0] left-[0] my-auto w-[84%]">
                  <div className="absolute h-10 inset-y-[0] left-[0] my-auto w-4/5">
                    <div className="absolute h-10 inset-y-[0] left-[0] my-auto w-3/4">
                      <Img
                        className="absolute h-10 inset-y-[0] left-[0] my-auto rounded-[50%] w-10"
                        src="images/img_oval.png"
                        alt="oval_One"
                      />
                      <Img
                        className="absolute h-10 inset-y-[0] my-auto right-[0] rounded-[50%] w-10"
                        src="images/img_ovalcopy.png"
                        alt="ovalcopy"
                      />
                    </div>
                    <Img
                      className="absolute h-10 inset-y-[0] my-auto right-[0] rounded-[50%] w-10"
                      src="images/img_ovalcopy2.png"
                      alt="ovalcopyTwo"
                    />
                  </div>
                  <Img
                    className="absolute h-10 inset-y-[0] my-auto right-[0] rounded-[50%] w-10"
                    src="images/img_ovalcopy3.png"
                    alt="ovalcopyThree"
                  />
                </div>
                <Img
                  className="absolute h-10 inset-y-[0] my-auto right-[0] rounded-[50%] w-10"
                  src="images/img_ovalcopy4.png"
                  alt="ovalcopyFour"
                />
              </div>
              <Text
                className="absolute bg-black-900 flex h-full inset-y-[0] items-center justify-center my-auto right-[0] rounded-[50%] text-center text-white-A700 text-xs w-10"
                size="txtPoppinsRegular12"
              >
                +44
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[100px] md:mt-0 mt-[7px]">
              <Text
                className="text-black-900 text-xl"
                size="txtPoppinsRegular20"
              >
                Menu
              </Text>
            </div>
          </div>
        </div>
        <div className="sm:h-[1039px] h-[1040px] md:h-[1933px] max-w-[1890px] mb-[7px] mx-auto md:px-5 relative w-full">
          <div className="absolute flex flex-col gap-2.5 inset-x-[0] items-center justify-start mx-auto top-[0] w-1/5">
            <div className="bg-gray-100 flex flex-row items-center justify-between p-[11px] rounded-[10px] w-full">
              <Text
                className="ml-2 mt-0.5 text-base text-black-900"
                size="txtPoppinsMedium16"
              >
                Trello
              </Text>
              <Img
                className="h-1.5 mr-2"
                src="images/img_grid.svg"
                alt="grid"
              />
            </div>
            <List
              className="flex flex-col gap-2.5 items-center w-full"
              orientation="vertical"
            >
              <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[170px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                      src="images/img_rectangle.png"
                      alt="rectangle"
                    />
                  </div>
                  <Img
                    className="h-2 mt-4"
                    src="images/img_tags.svg"
                    alt="tags"
                  />
                  <div className="flex flex-col items-start justify-start mt-[11px]">
                    <Text
                      className="text-base text-black-900"
                      size="txtPoppinsRegular16"
                    >
                      Types of paper in catalog printing
                    </Text>
                    <Text
                      className="leading-[19.00px] text-[13px] text-black-900_7e w-full"
                      size="txtPoppinsLight13"
                    >
                      Branding is no longer simply about visual appeal (or the
                      cherry in the apple pie example, as given in my earlier
                      article).
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[27px] w-full">
                    <div className="flex relative w-[26%]">
                      <div className="flex my-auto w-4/5">
                        <div className="flex my-auto w-[74%]">
                          <Img
                            className="h-[30px] my-auto rounded-[50%] w-[30px]"
                            src="images/img_oval_30x30.png"
                            alt="oval"
                          />
                          <Img
                            className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                            src="images/img_oval_1.png"
                            alt="oval_One"
                          />
                        </div>
                        <Img
                          className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                          src="images/img_oval_2.png"
                          alt="oval_Two"
                        />
                      </div>
                      <Button className="bg-black-900 flex h-[30px] items-center justify-center ml-[-13px] my-auto p-[9px] rounded-[50%] w-[30px] z-[1]">
                        <Img
                          className="h-3"
                          src="images/img_close.svg"
                          alt="close"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-[48%]">
                      <Text
                        className="text-black-900_6c text-sm"
                        size="txtPoppinsLight14"
                      >
                        34
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="text-black-900_6c text-sm"
                        size="txtPoppinsLight14"
                      >
                        23
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_favorite.svg"
                        alt="favorite"
                      />
                      <Text
                        className="text-black-900_6c text-sm"
                        size="txtPoppinsLight14"
                      >
                        98
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_attach.svg"
                        alt="attach"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Img
                    className="h-2"
                    src="images/img_tags_teal_a400.svg"
                    alt="tags"
                  />
                  <div className="flex flex-col items-start justify-start mt-2.5">
                    <Text
                      className="text-base text-black-900"
                      size="txtPoppinsRegular16"
                    >
                      There is no competition
                    </Text>
                    <Text
                      className="leading-[19.00px] mt-0.5 text-[13px] text-black-900_7e w-full"
                      size="txtPoppinsLight13"
                    >
                      This article is floated online with an aim to help you
                      find the best dvd printing solution.
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[27px] w-full">
                    <div className="flex relative w-1/5">
                      <div className="flex my-auto w-[74%]">
                        <Img
                          className="h-[30px] my-auto rounded-[50%] w-[30px]"
                          src="images/img_oval_3.png"
                          alt="oval"
                        />
                        <Img
                          className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                          src="images/img_oval_4.png"
                          alt="oval_One"
                        />
                      </div>
                      <Button className="bg-black-900 flex h-[30px] items-center justify-center ml-[-13px] my-auto p-[9px] rounded-[50%] w-[30px] z-[1]">
                        <Img
                          className="h-3"
                          src="images/img_close.svg"
                          alt="close"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-start w-[48%]">
                      <Text
                        className="text-black-900_6c text-sm"
                        size="txtPoppinsLight14"
                      >
                        23
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="ml-6 text-black-900_6c text-sm"
                        size="txtPoppinsLight14"
                      >
                        12
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_favorite.svg"
                        alt="favorite"
                      />
                      <Text
                        className="ml-[19px] text-black-900_6c text-sm"
                        size="txtPoppinsLight14"
                      >
                        44
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_attach.svg"
                        alt="attach"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="bg-white-A700 flex flex-col items-center justify-end outline-[0.5px] outline-black-900_33 outline-dashed p-[66px] md:px-10 sm:px-5 rounded-[10px] w-full">
              <Text
                className="mt-0.5 text-base text-black-900 text-center"
                size="txtPoppinsRegular16"
              >
                + Add new card
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 h-full items-center justify-start w-1/5">
            <div className="bg-gray-100 flex flex-row items-center justify-between p-2.5 rounded-[10px] w-full">
              <Text
                className="ml-[9px] mt-[5px] text-base text-black-900"
                size="txtPoppinsMedium16"
              >
                Design
              </Text>
              <Img
                className="h-1.5 mr-[9px]"
                src="images/img_grid.svg"
                alt="grid_One"
              />
            </div>
            <List
              className="flex flex-col gap-2.5 items-center w-full"
              orientation="vertical"
            >
              <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Img
                    className="h-2"
                    src="images/img_television.svg"
                    alt="television"
                  />
                  <div className="flex flex-col items-center justify-start mt-[9px]">
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtPoppinsRegular16"
                    >
                      Old fashioned recipe for preventing allergies and chemical
                      sensitivities
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[26px] w-full">
                    <div className="flex relative w-[15%]">
                      <Img
                        className="h-[30px] my-auto rounded-[50%] w-[30px]"
                        src="images/img_oval_5.png"
                        alt="oval"
                      />
                      <Button className="bg-black-900 flex h-[30px] items-center justify-center ml-[-13px] my-auto p-[9px] rounded-[50%] w-[30px] z-[1]">
                        <Img
                          className="h-3"
                          src="images/img_close.svg"
                          alt="close"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-start w-[48%]">
                      <Text
                        className="text-black-900_6c text-sm"
                        size="txtPoppinsLight14"
                      >
                        34
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="ml-[23px] text-black-900_6c text-sm"
                        size="txtPoppinsLight14"
                      >
                        14
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_favorite.svg"
                        alt="favorite"
                      />
                      <Text
                        className="ml-[19px] text-black-900_6c text-sm"
                        size="txtPoppinsLight14"
                      >
                        34
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_attach.svg"
                        alt="attach"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Img
                    className="h-2"
                    src="images/img_tags_teal_a400_8x264.svg"
                    alt="tags"
                  />
                  <div className="flex flex-col items-start justify-start mt-[11px]">
                    <Text
                      className="text-base text-black-900"
                      size="txtPoppinsRegular16"
                    >
                      Home business advertising ideas
                    </Text>
                    <Text
                      className="leading-[19.00px] text-[13px] text-black-900_7e w-full"
                      size="txtPoppinsLight13"
                    >
                      Successful businesses know the importance of building and
                      maintaining good working.
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[27px] w-full">
                    <div className="flex relative w-1/5">
                      <div className="flex my-auto w-[74%]">
                        <Img
                          className="h-[30px] my-auto rounded-[50%] w-[30px]"
                          src="images/img_oval_6.png"
                          alt="oval"
                        />
                        <Img
                          className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                          src="images/img_oval_7.png"
                          alt="oval_One"
                        />
                      </div>
                      <Button className="bg-black-900 flex h-[30px] items-center justify-center ml-[-13px] my-auto p-[9px] rounded-[50%] w-[30px] z-[1]">
                        <Img
                          className="h-3"
                          src="images/img_close.svg"
                          alt="close"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-start w-[48%]">
                      <Text
                        className="text-black-900_6c text-sm"
                        size="txtPoppinsLight14"
                      >
                        23
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="ml-6 text-black-900_6c text-sm"
                        size="txtPoppinsLight14"
                      >
                        12
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_favorite.svg"
                        alt="favorite"
                      />
                      <Text
                        className="ml-[19px] text-black-900_6c text-sm"
                        size="txtPoppinsLight14"
                      >
                        43
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_attach.svg"
                        alt="attach"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="bg-gray-100 flex flex-col items-center justify-start p-5 rounded-[10px] w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[170px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                    src="images/img_photo.png"
                    alt="photo"
                  />
                </div>
                <Img
                  className="h-2 mt-4"
                  src="images/img_television_light_blue_500.svg"
                  alt="television"
                />
                <div className="flex flex-col items-center justify-start mt-[9px]">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtPoppinsRegular16"
                  >
                    Cosmetic surgery abroad making the right choice
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[26px] w-full">
                  <div className="flex relative w-[26%]">
                    <div className="flex my-auto w-4/5">
                      <div className="flex my-auto w-[74%]">
                        <Img
                          className="h-[30px] my-auto rounded-[50%] w-[30px]"
                          src="images/img_oval_8.png"
                          alt="oval_Two"
                        />
                        <Img
                          className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                          src="images/img_oval_1.png"
                          alt="oval_Three"
                        />
                      </div>
                      <Img
                        className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                        src="images/img_oval_9.png"
                        alt="oval_Four"
                      />
                    </div>
                    <Button className="bg-black-900 flex h-[30px] items-center justify-center ml-[-13px] my-auto p-[9px] rounded-[50%] w-[30px] z-[1]">
                      <Img
                        className="h-3"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-row items-center justify-start w-[48%]">
                    <Text
                      className="text-black-900_6c text-sm"
                      size="txtPoppinsLight14"
                    >
                      54
                    </Text>
                    <Img
                      className="h-5 w-5"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="ml-[23px] text-black-900_6c text-sm"
                      size="txtPoppinsLight14"
                    >
                      16
                    </Text>
                    <Img
                      className="h-5 w-5"
                      src="images/img_favorite.svg"
                      alt="favorite_One"
                    />
                    <Text
                      className="ml-[19px] text-black-900_6c text-sm"
                      size="txtPoppinsLight14"
                    >
                      33
                    </Text>
                    <Img
                      className="h-5 w-5"
                      src="images/img_attach.svg"
                      alt="attach"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-end outline-[0.5px] outline-black-900_33 outline-dashed p-[66px] md:px-10 sm:px-5 rounded-[10px] w-full">
              <div className="flex flex-col items-center justify-start mt-0.5">
                <Text
                  className="text-base text-black-900 text-center"
                  size="txtPoppinsRegular16"
                >
                  + Add new card
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute sm:h-[1032px] h-[1040px] md:h-[1926px] inset-[0] justify-center m-auto overflow-auto w-full">
            <div className="absolute flex flex-col gap-2.5 h-max inset-y-[0] items-center justify-start left-[21%] my-auto w-1/5">
              <div className="bg-gray-100 flex flex-row items-center justify-between p-2.5 rounded-[10px] w-full">
                <Text
                  className="ml-[9px] mt-[5px] text-base text-black-900"
                  size="txtPoppinsMedium16"
                >
                  Prototip
                </Text>
                <Img
                  className="h-1.5 mr-[9px]"
                  src="images/img_grid.svg"
                  alt="grid_Two"
                />
              </div>
              <div className="bg-gray-100 flex flex-col items-center justify-start p-5 rounded-[10px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Img
                    className="h-2"
                    src="images/img_tags_deep_purple_a400.svg"
                    alt="tags"
                  />
                  <div className="flex flex-col items-start justify-start mt-[11px]">
                    <Text
                      className="text-base text-black-900"
                      size="txtPoppinsRegular16"
                    >
                      Home business advertising ideas
                    </Text>
                    <Text
                      className="leading-[19.00px] text-[13px] text-black-900_7e w-full"
                      size="txtPoppinsLight13"
                    >
                      Successful businesses know the importance of building and
                      maintaining good working.
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[27px] w-full">
                    <Button className="bg-black-900 flex h-[30px] items-center justify-center p-[9px] rounded-[50%] w-[30px]">
                      <Img
                        className="h-3"
                        src="images/img_close.svg"
                        alt="close_One"
                      />
                    </Button>
                    <div className="flex flex-row items-center justify-start">
                      <Text
                        className="text-black-900_6c text-sm"
                        size="txtPoppinsLight14"
                      >
                        76
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_user.svg"
                        alt="user_One"
                      />
                      <Text
                        className="ml-[18px] text-black-900_6c text-sm"
                        size="txtPoppinsLight14"
                      >
                        45
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_favorite.svg"
                        alt="favorite_Two"
                      />
                      <Text
                        className="ml-6 text-black-900_6c text-sm"
                        size="txtPoppinsLight14"
                      >
                        12
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_attach.svg"
                        alt="attach_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-2.5 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] w-full">
                  <div className="flex flex-col items-start justify-start my-1 w-[99%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                      <Img
                        className="h-[170px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                        src="images/img_rectangle_170x322.png"
                        alt="rectangle"
                      />
                    </div>
                    <Img
                      className="h-2 mt-4"
                      src="images/img_tags_yellow_700.svg"
                      alt="tags"
                    />
                    <div className="flex flex-col items-start justify-start mt-[9px] w-full">
                      <Text
                        className="text-base text-black-900 w-[90%] sm:w-full"
                        size="txtPoppinsRegular16"
                      >
                        Unmatched toner cartridge quality 20 less than oem price
                      </Text>
                      <Text
                        className="leading-[19.00px] mt-[3px] text-[13px] text-black-900_7e w-full"
                        size="txtPoppinsLight13"
                      >
                        Why read motivational sayings? For motivation! You might
                        need a bit, if you can use last year’s list of goals
                        this year because it’s as good as new.
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[29px] w-[99%] md:w-full">
                      <div className="flex relative w-[26%]">
                        <div className="flex my-auto w-4/5">
                          <div className="flex my-auto w-[74%]">
                            <Img
                              className="h-[30px] my-auto rounded-[50%] w-[30px]"
                              src="images/img_oval_10.png"
                              alt="oval"
                            />
                            <Img
                              className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                              src="images/img_oval_11.png"
                              alt="oval_One"
                            />
                          </div>
                          <Img
                            className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                            src="images/img_oval_12.png"
                            alt="oval_Two"
                          />
                        </div>
                        <Button className="bg-black-900 flex h-[30px] items-center justify-center ml-[-13px] my-auto p-[9px] rounded-[50%] w-[30px] z-[1]">
                          <Img
                            className="h-3"
                            src="images/img_close.svg"
                            alt="close"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-evenly w-[47%]">
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsLight14"
                        >
                          76
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_user.svg"
                          alt="user"
                        />
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsLight14"
                        >
                          32
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_favorite.svg"
                          alt="favorite"
                        />
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsLight14"
                        >
                          66
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_attach.svg"
                          alt="attach"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-[18px] rounded-[10px] w-full">
                  <div className="flex flex-col items-start justify-start my-0.5 w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[170px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                        src="images/img_rectangle_1.png"
                        alt="rectangle"
                      />
                    </div>
                    <Img
                      className="h-2 mt-4"
                      src="images/img_television_teal_a400.svg"
                      alt="television"
                    />
                    <div className="flex flex-col items-start justify-start mt-[11px]">
                      <Text
                        className="text-base text-black-900"
                        size="txtPoppinsRegular16"
                      >
                        How to look up
                      </Text>
                      <Text
                        className="leading-[19.00px] text-[13px] text-black-900_7e w-full"
                        size="txtPoppinsLight13"
                      >
                        Are you considering buying a compatible inkjet cartridge
                        for your printer?
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[27px] w-full">
                      <div className="flex relative w-1/4">
                        <div className="flex my-auto w-4/5">
                          <div className="flex my-auto w-[74%]">
                            <Img
                              className="h-[30px] my-auto rounded-[50%] w-[30px]"
                              src="images/img_oval_13.png"
                              alt="oval"
                            />
                            <Img
                              className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                              src="images/img_oval_1.png"
                              alt="oval_One"
                            />
                          </div>
                          <Img
                            className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                            src="images/img_oval_14.png"
                            alt="oval_Two"
                          />
                        </div>
                        <Button className="bg-black-900 flex h-[30px] items-center justify-center ml-[-13px] my-auto p-[9px] rounded-[50%] w-[30px] z-[1]">
                          <Img
                            className="h-3"
                            src="images/img_close.svg"
                            alt="close"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-start w-[47%]">
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsLight14"
                        >
                          54
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_user.svg"
                          alt="user"
                        />
                        <Text
                          className="ml-5 text-black-900_6c text-sm"
                          size="txtPoppinsLight14"
                        >
                          76
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_favorite.svg"
                          alt="favorite"
                        />
                        <Text
                          className="ml-7 text-black-900_6c text-sm"
                          size="txtPoppinsLight14"
                        >
                          11
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_attach.svg"
                          alt="attach"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="absolute flex md:flex-col flex-row gap-[30px] items-start justify-between right-[0] top-[0] w-2/5">
              <div className="flex flex-col gap-2.5 items-center justify-start w-[49%] md:w-full">
                <div className="bg-gray-100 flex flex-row items-center justify-between p-[11px] rounded-[10px] w-full">
                  <Text
                    className="ml-2 mt-0.5 text-base text-black-900"
                    size="txtPoppinsMedium16"
                  >
                    Test
                  </Text>
                  <Img
                    className="h-1.5 mr-2"
                    src="images/img_grid.svg"
                    alt="grid_Three"
                  />
                </div>
                <List
                  className="flex flex-col gap-2.5 items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Img
                        className="h-2"
                        src="images/img_tags_red_600.svg"
                        alt="tags"
                      />
                      <div className="flex flex-col items-start justify-start mt-2">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Linux or windows which is it
                        </Text>
                        <Text
                          className="mt-1 text-[13px] text-black-900_7e"
                          size="txtPoppinsLight13"
                        >
                          Saving money – is something we would all like.
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[25px] w-full">
                        <div className="flex relative w-[36%]">
                          <div className="flex my-auto w-[86%]">
                            <div className="flex my-auto w-[83%]">
                              <div className="flex my-auto w-4/5">
                                <div className="flex my-auto w-[74%]">
                                  <Img
                                    className="h-[30px] my-auto rounded-[50%] w-[30px]"
                                    src="images/img_oval_15.png"
                                    alt="oval"
                                  />
                                  <Img
                                    className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                                    src="images/img_oval_16.png"
                                    alt="oval_One"
                                  />
                                </div>
                                <Img
                                  className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                                  src="images/img_oval_17.png"
                                  alt="oval_Two"
                                />
                              </div>
                              <Img
                                className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                                src="images/img_oval_18.png"
                                alt="oval_Three"
                              />
                            </div>
                            <Img
                              className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                              src="images/img_oval_19.png"
                              alt="oval_Four"
                            />
                          </div>
                          <Button className="bg-black-900 flex h-[30px] items-center justify-center ml-[-13px] my-auto p-[9px] rounded-[50%] w-[30px] z-[1]">
                            <Img
                              className="h-3"
                              src="images/img_close.svg"
                              alt="close"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row items-center justify-start w-[48%]">
                          <Text
                            className="text-black-900_6c text-sm"
                            size="txtPoppinsLight14"
                          >
                            32
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_user.svg"
                            alt="user"
                          />
                          <Text
                            className="ml-5 text-black-900_6c text-sm"
                            size="txtPoppinsLight14"
                          >
                            87
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_favorite.svg"
                            alt="favorite"
                          />
                          <Text
                            className="ml-6 text-black-900_6c text-sm"
                            size="txtPoppinsLight14"
                          >
                            31
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_attach.svg"
                            alt="attach"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[170px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                          src="images/img_rectangle_2.png"
                          alt="rectangle"
                        />
                      </div>
                      <Img
                        className="h-2 mt-4"
                        src="images/img_tags.svg"
                        alt="tags"
                      />
                      <div className="flex flex-col items-start justify-start mt-[11px]">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Be single minded
                        </Text>
                        <Text
                          className="leading-[19.00px] text-[13px] text-black-900_7e w-full"
                          size="txtPoppinsLight13"
                        >
                          Create a list with all possible keywords that fit to
                          your product, service or business field.
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[27px] w-full">
                        <div className="flex relative w-[26%]">
                          <div className="flex my-auto w-4/5">
                            <div className="flex my-auto w-[74%]">
                              <Img
                                className="h-[30px] my-auto rounded-[50%] w-[30px]"
                                src="images/img_oval_20.png"
                                alt="oval"
                              />
                              <Img
                                className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                                src="images/img_oval_21.png"
                                alt="oval_One"
                              />
                            </div>
                            <Img
                              className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                              src="images/img_oval_22.png"
                              alt="oval_Two"
                            />
                          </div>
                          <Button className="bg-black-900 flex h-[30px] items-center justify-center ml-[-13px] my-auto p-[9px] rounded-[50%] w-[30px] z-[1]">
                            <Img
                              className="h-3"
                              src="images/img_close.svg"
                              alt="close"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row items-center justify-start w-[46%]">
                          <Text
                            className="text-black-900_6c text-sm"
                            size="txtPoppinsLight14"
                          >
                            21
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_user.svg"
                            alt="user"
                          />
                          <Text
                            className="ml-[19px] text-black-900_6c text-sm"
                            size="txtPoppinsLight14"
                          >
                            34
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_favorite.svg"
                            alt="favorite"
                          />
                          <Text
                            className="ml-[25px] text-black-900_6c text-sm"
                            size="txtPoppinsLight14"
                          >
                            17
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_attach.svg"
                            alt="attach"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Img
                        className="h-2"
                        src="images/img_television.svg"
                        alt="television"
                      />
                      <div className="flex flex-col items-start justify-start mt-2">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Linux or windows which is it
                        </Text>
                        <Text
                          className="mt-1 text-[13px] text-black-900_7e"
                          size="txtPoppinsLight13"
                        >
                          Saving money – is something we would all like.
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[25px] w-full">
                        <div className="flex relative w-[26%]">
                          <div className="flex my-auto w-4/5">
                            <div className="flex my-auto w-[74%]">
                              <Img
                                className="h-[30px] my-auto rounded-[50%] w-[30px]"
                                src="images/img_oval_23.png"
                                alt="oval"
                              />
                              <Img
                                className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                                src="images/img_oval_7.png"
                                alt="oval_One"
                              />
                            </div>
                            <Img
                              className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                              src="images/img_oval_11.png"
                              alt="oval_Two"
                            />
                          </div>
                          <Button className="bg-black-900 flex h-[30px] items-center justify-center ml-[-13px] my-auto p-[9px] rounded-[50%] w-[30px] z-[1]">
                            <Img
                              className="h-3"
                              src="images/img_close.svg"
                              alt="close"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row items-center justify-start w-[48%]">
                          <Text
                            className="text-black-900_6c text-sm"
                            size="txtPoppinsLight14"
                          >
                            55
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_user.svg"
                            alt="user"
                          />
                          <Text
                            className="ml-[19px] text-black-900_6c text-sm"
                            size="txtPoppinsLight14"
                          >
                            23
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_favorite.svg"
                            alt="favorite"
                          />
                          <Text
                            className="ml-[23px] text-black-900_6c text-sm"
                            size="txtPoppinsLight14"
                          >
                            19
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_attach.svg"
                            alt="attach"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-gray-100 flex flex-col items-center justify-start p-5 rounded-[10px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      className="h-2"
                      src="images/img_tags_teal_a400.svg"
                      alt="tags_One"
                    />
                    <div className="flex flex-col items-start justify-start mt-2">
                      <Text
                        className="text-base text-black-900"
                        size="txtPoppinsRegular16"
                      >
                        Dna the future of nutrition
                      </Text>
                      <Text
                        className="leading-[19.00px] mt-1 text-[13px] text-black-900_7e w-full"
                        size="txtPoppinsLight13"
                      >
                        “Why does anyone want a vasectomy reversal?” This is a
                        question I hear any time I tell someone what I do for a
                        living.
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[27px] w-full">
                      <div className="flex relative w-1/5">
                        <div className="flex my-auto w-[74%]">
                          <Img
                            className="h-[30px] my-auto rounded-[50%] w-[30px]"
                            src="images/img_oval_24.png"
                            alt="oval_Five"
                          />
                          <Img
                            className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                            src="images/img_oval_25.png"
                            alt="oval_Six"
                          />
                        </div>
                        <Button className="bg-black-900 flex h-[30px] items-center justify-center ml-[-13px] my-auto p-[9px] rounded-[50%] w-[30px] z-[1]">
                          <Img
                            className="h-3"
                            src="images/img_close.svg"
                            alt="close_Two"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-evenly w-[46%]">
                        <Text
                          className="text-black-900_6c text-right text-sm"
                          size="txtPoppinsLight14"
                        >
                          12
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_user.svg"
                          alt="user_Two"
                        />
                        <Text
                          className="text-black-900_6c text-right text-sm"
                          size="txtPoppinsLight14"
                        >
                          33
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_favorite.svg"
                          alt="favorite_Three"
                        />
                        <Text
                          className="text-black-900_6c text-right text-sm"
                          size="txtPoppinsLight14"
                        >
                          66
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_attach.svg"
                          alt="attach_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[49%] md:w-full">
                <div className="bg-gray-100 flex flex-row items-center justify-between p-3 rounded-[10px] w-full">
                  <Text
                    className="ml-[7px] text-base text-black-900"
                    size="txtPoppinsMedium16"
                  >
                    Final
                  </Text>
                  <Img
                    className="h-1.5 mr-[7px]"
                    src="images/img_grid.svg"
                    alt="grid_Four"
                  />
                </div>
                <div className="bg-gray-100 flex flex-col items-center justify-start mt-2.5 p-5 rounded-[10px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      className="h-2"
                      src="images/img_tags_deep_purple_a400_8x196.svg"
                      alt="tags_Two"
                    />
                    <div className="flex flex-col items-start justify-start mt-[9px] w-full">
                      <Text
                        className="text-base text-black-900 w-[85%] sm:w-full"
                        size="txtPoppinsRegular16"
                      >
                        At home treatments for beauty on a budget
                      </Text>
                      <Text
                        className="leading-[19.00px] mt-[3px] text-[13px] text-black-900_7e w-full"
                        size="txtPoppinsLight13"
                      >
                        The holidays bring with them thoughts of carving and
                        serving delicious turkey dinners to your family and
                        friends. Tradition has its fans, but perhaps this year
                        you’d like to try a twist to your turkey recipe.
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[29px] w-full">
                      <Button className="bg-black-900 flex h-[30px] items-center justify-center p-[9px] rounded-[50%] w-[30px]">
                        <Img
                          className="h-3"
                          src="images/img_close.svg"
                          alt="close_Three"
                        />
                      </Button>
                      <div className="flex flex-row items-center justify-evenly">
                        <Text
                          className="text-black-900_6c text-right text-sm"
                          size="txtPoppinsLight14"
                        >
                          87
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_user.svg"
                          alt="user_Three"
                        />
                        <Text
                          className="text-black-900_6c text-right text-sm"
                          size="txtPoppinsLight14"
                        >
                          54
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_favorite.svg"
                          alt="favorite_Four"
                        />
                        <Text
                          className="text-black-900_6c text-right text-sm"
                          size="txtPoppinsLight14"
                        >
                          32
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_attach.svg"
                          alt="attach_Three"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-2.5 items-center mt-[25px] w-full"
                  orientation="vertical"
                >
                  <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Img
                        className="h-2"
                        src="images/img_tags_teal_a400_8x128.svg"
                        alt="tags"
                      />
                      <div className="flex flex-col items-start justify-start mt-[11px]">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Home business advertising ideas
                        </Text>
                        <Text
                          className="leading-[19.00px] text-[13px] text-black-900_7e w-full"
                          size="txtPoppinsLight13"
                        >
                          Successful businesses know the importance of building
                          and maintaining good working.
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[27px] w-full">
                        <div className="flex relative w-1/5">
                          <div className="flex my-auto w-[74%]">
                            <Img
                              className="h-[30px] my-auto rounded-[50%] w-[30px]"
                              src="images/img_oval_26.png"
                              alt="oval"
                            />
                            <Img
                              className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                              src="images/img_oval_27.png"
                              alt="oval_One"
                            />
                          </div>
                          <Button className="bg-black-900 flex h-[30px] items-center justify-center ml-[-13px] my-auto p-[9px] rounded-[50%] w-[30px] z-[1]">
                            <Img
                              className="h-3"
                              src="images/img_close.svg"
                              alt="close"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row items-center justify-start w-[46%]">
                          <Text
                            className="text-black-900_6c text-right text-sm"
                            size="txtPoppinsLight14"
                          >
                            13
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_user.svg"
                            alt="user"
                          />
                          <Text
                            className="ml-7 text-black-900_6c text-right text-sm"
                            size="txtPoppinsLight14"
                          >
                            11
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_favorite.svg"
                            alt="favorite"
                          />
                          <Text
                            className="ml-[19px] text-black-900_6c text-right text-sm"
                            size="txtPoppinsLight14"
                          >
                            43
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_attach.svg"
                            alt="attach"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[170px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                          src="images/img_rectangle_3.png"
                          alt="rectangle"
                        />
                      </div>
                      <Img
                        className="h-2 mt-4"
                        src="images/img_tags_yellow_700.svg"
                        alt="tags"
                      />
                      <div className="flex flex-col items-center justify-start mt-[9px]">
                        <Text
                          className="text-base text-black-900 w-[97%] sm:w-full"
                          size="txtPoppinsRegular16"
                        >
                          Tips for choosing the perfect gloss for your lips
                        </Text>
                        <Text
                          className="leading-[19.00px] mt-[3px] text-[13px] text-black-900_7e w-full"
                          size="txtPoppinsLight13"
                        >
                          With MySpace becoming more popular every day, there is
                          the constant need to be different. There are millions
                          of users.
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[29px] w-full">
                        <div className="flex relative w-[26%]">
                          <div className="flex my-auto w-4/5">
                            <div className="flex my-auto w-[74%]">
                              <Img
                                className="h-[30px] my-auto rounded-[50%] w-[30px]"
                                src="images/img_oval_10.png"
                                alt="oval"
                              />
                              <Img
                                className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                                src="images/img_oval_11.png"
                                alt="oval_One"
                              />
                            </div>
                            <Img
                              className="h-[30px] ml-[-13px] my-auto rounded-[50%] w-[30px] z-[1]"
                              src="images/img_oval_12.png"
                              alt="oval_Two"
                            />
                          </div>
                          <Button className="bg-black-900 flex h-[30px] items-center justify-center ml-[-13px] my-auto p-[9px] rounded-[50%] w-[30px] z-[1]">
                            <Img
                              className="h-3"
                              src="images/img_close.svg"
                              alt="close"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row items-center justify-start w-[46%]">
                          <Text
                            className="text-black-900_6c text-right text-sm"
                            size="txtPoppinsLight14"
                          >
                            21
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_user.svg"
                            alt="user"
                          />
                          <Text
                            className="ml-[19px] text-black-900_6c text-right text-sm"
                            size="txtPoppinsLight14"
                          >
                            23
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_favorite.svg"
                            alt="favorite"
                          />
                          <Text
                            className="ml-6 text-black-900_6c text-right text-sm"
                            size="txtPoppinsLight14"
                          >
                            12
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_attach.svg"
                            alt="attach"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="absolute bottom-[0] h-3.5 inset-x-[0] mx-auto overflow-hidden w-[99%]">
              <div className="w-full h-full absolute bg-black_900_0f rounded-[7px]"></div>
              <div
                className="h-full absolute bg-black_900_4c  rounded-[7px]"
                style={{ width: "16%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsPagePage;
