export interface Slite {
    topic?: string,
    answer?: string,
    appendix?: string
}

export const SLITES: Slite[] = [
    
    {
        topic: `Todays topics`,
        answer: `apps → browsers → node → code`
    },
    { 
        topic: 'Making a (modern) website is (not) simple (anymore)', 
    },
    { 
        topic: 'To capture it briefly', 
        answer: `Diversity in browsers, devices and screen resolutions, ..., template, styles, EcmaScript versions, JavaScript, TypeScript, transpiler, modules, 
                 dependencies, polyfills, bundler, ..., unit & integration testing, efficient data layer, observables, * third party / framework specific *, ..., 
                 continuos integration, deploy, documentation, network, security, ..., visual appeareance, usability, components, redux, ...`,
        appendix: `which all concerns front end...`
    },
    {
        topic: `Javascript engines`
    },
    {
        topic: `TS & JS`
    },
    {
        topic: `ng`
    },
    {
        topic: `ngrx, GraphQL`
    },

];