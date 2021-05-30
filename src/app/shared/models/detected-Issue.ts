export interface DetectedIssue {
    id: string,
    identifier?: Identifier[],
    status: "registered" | "preliminary" | "final" | "amended",
    code?: CodeableConcept,
    severity?: "high" | "moderate" | "low",
    patient?: Reference,
    identifiedDateTime?: string,
    identifiedPeriod?: Period,
    author?: Reference,
    implicated?: Reference[],
    evidence?: BackboneElement[]
    details?: string,
    reference?: string,
    mitigation?: TypeOfBackboneElement[],
}

export interface TypeOfBackboneElement{
    action: CodeableConcept,
    date?: string,
    author?: Reference
}

export interface BackboneElement{
    code?: string[],
    details?: Reference[]
}

export interface Identifier{
    use?: "usual" | "official" | "temp" | "secondary" | "old",
    type?: CodeableConcept,
    system?: string,
    value?: string,
    period?: Period,
    assigner?: Reference
}

export interface Reference{
    reference?: string,
    type?: string,
    identifier?: Identifier,
    display?: string
}

export interface Period{
    start?: string,
    end?: string
}

export interface CodeableConcept{
    coding?: Coding[],
    text?: string
}

export interface Coding{
    system?: string,
    version?: string,
    code?: string,
    display?: string,
    userSelected?: boolean
}