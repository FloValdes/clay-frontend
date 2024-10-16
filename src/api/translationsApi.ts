import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://clay-backend-fo5b.onrender.com';

interface TranslationResponse {
  [key: string]: string;
}

export const fetchTranslations = (page: string, locale: string): Promise<AxiosResponse<TranslationResponse>> => {
  return axios.get(`${API_URL}/pages`, {
    params: {
      page,
      locale
    }
  });
};

export const updateTranslations = (page: string, translations: Record<string, Record<string, string>>): Promise<AxiosResponse<TranslationResponse>> => {
  return axios.post(`${API_URL}/pages`, {
    page,
    translations
  });
};
