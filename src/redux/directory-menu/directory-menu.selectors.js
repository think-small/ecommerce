import { createSelector } from "reselect";

const selectDirectoryMenu = (state) => state.directoryMenu;

export const selectSections = createSelector(
  [selectDirectoryMenu],
  (directoryMenu) => directoryMenu.sections
);
