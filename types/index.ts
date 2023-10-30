type dictionaryPageType = {
    page: {
        home: {
            title1: string,
            description1: string,
            title2: string,
            description2: string,
            title3: string,
            description3: string,
            title4: string,
            description4: string,
            title5: string,
            description5: string,
            button: string,
        },
        signUp: {
            title: string,
            description: string,
            buttonFb: string,
            buttonGoogle: string,
            or: string,
            emailPlaceholder: string,
            disclaimer: string
        },
        signUpViaGoogle: {
            title: string,
            description: string,
            buttonFb: string,
            tieLater: string
        },
        signUpViaFacebook: {
            title: string,
            description: string,
            buttonGoogle: string,
            later: string
        },
        signUpFinal: {
            title: string,
            description: string,
            followFbButton: string,
            followIgButton: string
        },
        privacyPolicy: {
            title: string
        },
        userAgreement: {
            title: string
        }
    },
}

export type { dictionaryPageType };
