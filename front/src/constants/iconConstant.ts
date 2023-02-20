// 사용할 icon 이름들
export type iconName = "eye" | "eyeClose";

// 타입 선언
type icon = {
    path: string;
    viewBox: string;
};

// icon의 path와 viewBox
const IconSet: Record<iconName, icon> = {
    eye: {
        path:
        viewBox: "0 0 24 24"
    }
}