interface OffshootMargins {
    marginTop: string,
    marginLeft: string,
    correlatedTerminal?: string
  }
  
export default interface MarginObject {
    defaultMarginLeft: string,
    leftOffshootMargins: OffshootMargins[]
    rightOffshootMargins: OffshootMargins[]
}