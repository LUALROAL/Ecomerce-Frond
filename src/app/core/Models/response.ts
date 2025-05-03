export  interface ResponseDto<T> {
  message: string;
  isSuccess: boolean;
  data: T | null;
}
