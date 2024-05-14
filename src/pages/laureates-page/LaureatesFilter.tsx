import React from "react";
import cn from "classnames";
import { SelectBox } from "@/shared/ui/selectbox";
import { InputSearch } from "@/shared/ui/inputSearch";
import classNames from "classnames";

interface LaureatesFilterProps {
  filter: {nomination: String, year: String, query: String};
  setFilter: void;
}

const LaureatesFilter:React.FC<LaureatesFilterProps> = () => {
  return(
    <></>
    // <div className={cn(classes.laureatesfilter)}>
    //     <SelectBox
    //       dataList={nominations}
    //       value={nomination}
    //       setValue={setNomination}
    //     />
    //     <SelectBox
    //       dataList={years}
    //       value={year}
    //       setValue={setYear}
    //     />
    //     <InputSearch className={cn(classes.laureatesfilter__inputSearch)} value={''} handleInputChange={() => { }} handleForm={() => { }} />
    //   </div>
  );
}

export default LaureatesFilter;