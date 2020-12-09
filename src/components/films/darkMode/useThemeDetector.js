export const useThemeDetector = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return true;
    }else{
       return false;
    }
}