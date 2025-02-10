import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCharactersApi } from '../../API/api';
import { TCharacter } from '../../types';

export const getCharacters = createAsyncThunk(
  'characters/getCharactersByName',
  async (name: string) => await getCharactersApi(name)
);

export type TCharactersState = {
  characters: Array<TCharacter>;
  loading: boolean;
  error: string | null;
};

const initialState: TCharactersState = {
  characters: [],
  loading: false,
  error: null
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  selectors: {
    getCharactersSelector: (state) => state.characters,
    isLoadingSelector: (state) => state.loading
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка';
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
      });
  }
});

export const { reducer } = charactersSlice;
export const { getCharactersSelector, isLoadingSelector } =
charactersSlice.selectors; 