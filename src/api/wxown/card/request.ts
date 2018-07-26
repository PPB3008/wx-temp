export interface cardActivateInputDto {
    ActivateBeginTime?: number,
    ActivateEndTime?: number,
    AppId?: string,
    BackgroundPicUrl?: string,
    CardId?: string,
    Code: string,
    InitBalance?: number,
    InitBonus?: number,
    InitBonusRecord?: string,
    InitCustomFieldValue1?: string,
    InitCustomFieldValue2?: string,
    InitCustomFieldValue3?: string,
    MembershipNumber?: string
}


export interface cardCreateInputDto {
    AdvancedInfo?: {
      AbstractInfo: {
        AbstractText: string,
        IconUrlList: [
          string
        ]
      },
      BusinessService: [
        string
      ],
      TextImageList: [
        {
          ImageUrl: string,
          Text: string
        }
      ],
      TimeLimit: [
        {
          BeginHour: number,
          BeginMinute: number,
          EndHour: number,
          EndMinute: number,
          Type: string
        }
      ],
      UseCondition: {
        AcceptCategory: string,
        CanUseWithOtherDiscount: boolean,
        LeastCost: number,
        ObjectUseFor: string,
        RejectCategory: string
      }
    },
    BaseInfo?: {
      BindOpenid: boolean,
      BrandName: string,
      CanGiveFriend: boolean,
      CanShare: boolean,
      CenterSubTitle: string,
      CenterTitle: string,
      CenterUrl: string,
      CodeType: string,
      Color: string,
      CustomUrl: string,
      CustomUrlName: string,
      CustomUrlSubTitle: string,
      DateInfo: {
        BeginTimestamp: number,
        EndTimestamp: number,
        FixedBeginTerm: number,
        FixedTerm: number,
        Type: string
      },
      Description: string,
      GetLimit: number,
      LocationIdList: [
        number
      ],
      LogoUrl: string,
      Notice: string,
      PromotionUrl: string,
      PromotionUrlName: string,
      PromotionUrlSubTitle: string,
      ServicePhone: string,
      Sku: {
        Quantity: number
      },
      Source: string,
      SubTitle: string,
      Title: string,
      UseAllLocations: boolean,
      UseCustomCode: boolean
    },
    CardType: string,
    DealDetail?: string,
    DefaultDetail?: string,
    Discount?: number,
    Gift?: string,
    LeastCost?: number,
    MemberCard: {
        ActivateAppBrandPass?: string,
        ActivateAppBrandUserName?: string,
        ActivateUrl?: string,
        AutoActivate?: boolean,
        BackgroundPicUrl?: string,
        BalanceRules?: string,
        BalanceUrl?: string,
        BonusCleared?: string,
        BonusRules?: string,
        BonusUrl?: string,
        CustomCell1?: {
          Name: string,
          Tips: string,
          Url: string
        },
        CustomCell2?: {
          Name: string,
          Tips: string,
          Url: string
        },
        CustomCell3?: {
          Name: string,
          Tips: string,
          Url: string
        },
        CustomField1?: {
          Name: string,
          NameType: string,
          Url: string
        },
        CustomField2?: {
          Name: string,
          NameType: string,
          Url: string
        },
        CustomField3?: {
          Name: string,
          NameType: string,
          Url: string
        },
        Discount?: number,
        Name?: string,
        NameType?: string,
        Prerogative: string,
        SupplyBalance: boolean,
        SupplyBonus: boolean,
        Url?: string,
        WxActivate?: boolean
    },
    ReduceCost?: number
  }
    



export interface cardDeleteInputDto {
    CardId: string,
}


export interface cardUpdateInputDto {
    AdvancedInfo?: {
      AbstractInfo: {
        AbstractText: string,
        IconUrlList: [
          string
        ]
      },
      BusinessService: [
        string
      ],
      TextImageList: [
        {
          ImageUrl: string,
          Text: string
        }
      ],
      TimeLimit: [
        {
          BeginHour: number,
          BeginMinute: number,
          EndHour: number,
          EndMinute: number,
          Type: string
        }
      ],
      UseCondition: {
        AcceptCategory: string,
        CanUseWithOtherDiscount: boolean,
        LeastCost: number,
        ObjectUseFor: string,
        RejectCategory: string
      }
    },
    BaseInfo?: {
      BindOpenid: boolean,
      BrandName: string,
      CanGiveFriend: boolean,
      CanShare: boolean,
      CenterSubTitle: string,
      CenterTitle: string,
      CenterUrl: string,
      CodeType: string,
      Color: string,
      CustomUrl: string,
      CustomUrlName: string,
      CustomUrlSubTitle: string,
      DateInfo: {
        BeginTimestamp: number,
        EndTimestamp: number,
        FixedBeginTerm: number,
        FixedTerm: number,
        Type: string
      },
      Description: string,
      GetLimit: number,
      LocationIdList: [
        number
      ],
      LogoUrl: string,
      Notice: string,
      PromotionUrl: string,
      PromotionUrlName: string,
      PromotionUrlSubTitle: string,
      ServicePhone: string,
      Sku: {
        Quantity: number
      },
      Source: string,
      SubTitle: string,
      Title: string,
      UseAllLocations: boolean,
      UseCustomCode: boolean
    },
    CardId: string,
    CardType: string,
    DealDetail?: string,
    DefaultDetail?: string,
    Discount?: number,
    Gift?: string,
    LeastCost?: number,
    MemberCard: {
      ActivateAppBrandPass?: string,
      ActivateAppBrandUserName?: string,
      ActivateUrl?: string,
      AutoActivate?: boolean,
      BackgroundPicUrl?: string,
      BalanceRules?: string,
      BalanceUrl?: string,
      BonusCleared?: string,
      BonusRules?: string,
      BonusUrl?: string,
      CustomCell1?: {
        Name: string,
        Tips: string,
        Url: string
      },
      CustomCell2?: {
        Name: string,
        Tips: string,
        Url: string
      },
      CustomCell3?: {
        Name: string,
        Tips: string,
        Url: string
      },
      CustomField1?: {
        Name: string,
        NameType: string,
        Url: string
      },
      CustomField2?: {
        Name: string,
        NameType: string,
        Url: string
      },
      CustomField3?: {
        Name: string,
        NameType: string,
        Url: string
      },
      Discount?: number,
      Name?: string,
      NameType?: string,
      Prerogative: string,
      SupplyBalance: boolean,
      SupplyBonus: boolean,
      Url?: string,
      WxActivate?: boolean
    },
    ReduceCost: number
  }
    

